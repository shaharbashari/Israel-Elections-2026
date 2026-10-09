"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { validateResearch } = require("./app.js");

const root = __dirname;
const readJSON = filename => JSON.parse(fs.readFileSync(path.join(root, "data", filename), "utf8").replace(/^\uFEFF/, ""));
const stringify = value => JSON.stringify(value, null, 2).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const exactKeys = (value, keys, label) => {
  assert(value && typeof value === "object" && !Array.isArray(value), `${label}: expected an object`);
  assert(Object.keys(value).length === keys.length && keys.every(key => Object.hasOwn(value, key)), `${label}: unexpected fields`);
};
const distinctStrings = (value, label) => {
  assert(Array.isArray(value) && value.every(s => typeof s === "string" && s.trim()), `${label}: expected strings`);
  assert(new Set(value).size === value.length, `${label}: duplicate value`);
};

function validateResearchContract(data) {
  const checked = validateResearch(data);
  assert(checked.valid, checked.problems.join("\n"));
  assert(data.sources.length <= 100 && data.parties.length <= 60, "Research exceeds the bounded source or roster capacity");
  const sourceIndex = new Map(data.sources.map(s => [s.id, s]));
  const references = (ids, label) => {
    distinctStrings(ids, label);
    for (const id of ids) assert(sourceIndex.has(id), `${label}: unknown source ${id}`);
  };
  const roster = data.roster;
  exactKeys(roster, ["asOfDate", "completeness", "authoritySourceIds", "enumerationSourceIds", "basisHe", "entries", "exclusions"], "roster");
  assert(roster.asOfDate === data.asOfDate, "Roster date differs from research date");
  assert(["complete", "partial", "unverified"].includes(roster.completeness), "Invalid completeness");
  assert(typeof roster.basisHe === "string" && roster.basisHe.trim(), "Missing roster basis");
  references(roster.authoritySourceIds, "roster.authoritySourceIds");
  references(roster.enumerationSourceIds, "roster.enumerationSourceIds");
  for (const id of roster.authoritySourceIds) {
    assert(["electoral_authority", "judicial_record"].includes(sourceIndex.get(id).sourceType), "Non-authority roster source");
  }
  if (roster.completeness === "complete") assert(roster.authoritySourceIds.length, "Complete roster requires authority evidence");
  assert(Array.isArray(roster.entries) && roster.entries.length === data.parties.length, "Roster and cards differ");
  const parties = new Map(data.parties.map(p => [p.id, p]));
  const entryIds = new Set();
  const ballotIds = new Map();
  for (const entry of roster.entries) {
    exactKeys(entry, ["id", "nameHe", "ballotLetters", "status", "sourceIds", "noteHe"], "roster entry");
    const party = parties.get(entry.id);
    assert(party && !entryIds.has(entry.id), "Unknown or repeated roster card");
    entryIds.add(entry.id);
    assert(entry.nameHe === party.nameHe && entry.ballotLetters === party.ballotLetters, "Roster identity differs from card");
    assert(["approved", "submitted", "announced", "unverified"].includes(entry.status), "Withdrawn/rejected entries must not remain current cards");
    assert(typeof entry.noteHe === "string" && entry.noteHe.trim(), "Missing participation qualification");
    references(entry.sourceIds, `roster.${entry.id}.sourceIds`);
    if (entry.status === "approved") {
      assert(entry.sourceIds.some(id => roster.authoritySourceIds.includes(id)), "Approval lacks direct authority reference");
    }
    references(party.ballotSourceIds, `${party.id}.ballotSourceIds`);
    distinctStrings(party.aliases, `${party.id}.aliases`);
    distinctStrings(party.componentNames, `${party.id}.componentNames`);
    if (party.ballotLetters) {
      assert(party.ballotSourceIds.length, "Ballot letters lack source references");
      assert(!ballotIds.has(party.ballotLetters), `Duplicate current ballot ${party.ballotLetters}`);
      ballotIds.set(party.ballotLetters, party.id);
    }
  }
  assert(Array.isArray(roster.exclusions), "Missing exclusions");
  for (const exclusion of roster.exclusions) {
    exactKeys(exclusion, ["nameHe", "reasonHe", "sourceIds"], "exclusion");
    assert(typeof exclusion.nameHe === "string" && exclusion.nameHe.trim(), "Missing excluded name");
    assert(typeof exclusion.reasonHe === "string" && exclusion.reasonHe.trim(), "Missing exclusion reason");
    references(exclusion.sourceIds, "exclusion sources");
    assert(exclusion.sourceIds.length, "Exclusion has no checked source");
  }
  const collator = new Intl.Collator("he", { sensitivity: "base" });
  const ordered = [...data.parties].sort((a, b) =>
    collator.compare(a.nameHe.normalize("NFKC"), b.nameHe.normalize("NFKC")) || a.id.localeCompare(b.id));
  assert(ordered.every((p, i) => p.id === data.parties[i].id && p.id === roster.entries[i].id), "Noncanonical card/roster order");
  return data;
}

function validateIssueGuide(guide, data) {
  exactKeys(guide, ["version", "asOfDate", "questions"], "issue guide");
  assert(guide.version === 1 && guide.asOfDate === data.asOfDate, "Invalid issue-guide version/date");
  assert(Array.isArray(guide.questions) && guide.questions.length >= 32, "Insufficient issue breadth");
  const topics = new Set(data.topics.map(t => t.id));
  const partyIds = data.parties.map(p => p.id);
  const seen = new Set();
  const evidence = new Map();
  for (const party of data.parties) for (const [topicId, bucket] of Object.entries(party.topicPositions)) {
    for (const category of ["positions", "promises", "records", "contextualReporting"]) {
      for (const item of bucket[category]) evidence.set(item.id, { partyId: party.id, topicId, item });
    }
  }
  for (const question of guide.questions) {
    exactKeys(question, ["id", "topicId", "titleHe", "promptHe", "explanationHe", "evidenceByParty"], "issue question");
    assert(/^[a-z][a-z0-9_-]*$/.test(question.id) && !seen.has(question.id), "Invalid or duplicate issue ID");
    seen.add(question.id);
    assert(topics.has(question.topicId), "Unknown issue topic");
    for (const key of ["titleHe", "promptHe", "explanationHe"]) {
      assert(typeof question[key] === "string" && question[key].trim(), `Missing ${key}`);
    }
    assert(question.evidenceByParty && Object.keys(question.evidenceByParty).join("|") === partyIds.join("|"), "Unequal or noncanonical issue coverage");
    for (const [partyId, ids] of Object.entries(question.evidenceByParty)) {
      distinctStrings(ids, `${question.id}/${partyId}`);
      for (const id of ids) {
        const entry = evidence.get(id);
        assert(entry && entry.partyId === partyId && entry.topicId === question.topicId, `Unrelated issue evidence ${id}`);
        assert(entry.item.status !== "missing" && entry.item.sourceIds.length, `Unsupported issue evidence ${id}`);
      }
    }
  }
  return guide;
}

function serializeResearch() {
  const data = validateResearchContract(readJSON("research.json"));
  fs.writeFileSync(path.join(root, "data.js"), `"use strict";\nwindow.ELECTION_DATA = ${stringify(data)};\n`, "utf8");
  return data;
}

function serializeIssueGuide(data = readJSON("research.json")) {
  const guide = validateIssueGuide(readJSON("issue-guide.json"), data);
  fs.writeFileSync(path.join(root, "issue-data.js"), `"use strict";\nwindow.ISSUE_GUIDE = ${stringify(guide)};\n`, "utf8");
  return guide;
}

function serializeArtifacts() {
  const data = serializeResearch();
  const guide = serializeIssueGuide(data);
  return { data, guide };
}

if (require.main === module) {
  const { data, guide } = serializeArtifacts();
  console.log(`Serialized ${data.parties.length} reported lists and ${guide.questions.length} reading subjects without generating facts.`);
}

module.exports = { serializeResearch, serializeIssueGuide, serializeArtifacts, validateResearchContract, validateIssueGuide };
