"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const app = require("../app.js");
const root = path.join(__dirname, "..");
const readJSON = (filename) => JSON.parse(fs.readFileSync(path.join(root, filename), "utf8").replace(/^\uFEFF/u, ""));
const research = readJSON(path.join("data", "research.json"));
const guidePath = path.join("data", "issue-guide.json");
const guide = fs.existsSync(path.join(root, guidePath)) ? readJSON(guidePath) : null;
const clone = () => structuredClone(research);
const checked = app.validateResearch(research);

function emptyGuide(data = research) {
  return {
    version: 1, asOfDate: data.asOfDate,
    questions: [{
      id: "q_reference_test", topicId: data.topics[0].id,
      titleHe: "בדיקת הפניות בלבד", promptHe: "בדיקה טכנית, ללא טענה פוליטית",
      explanationHe: "נתוני הבדיקה אינם מוצגים באתר.",
      evidenceByParty: Object.fromEntries(data.parties.map(({ id }) => [id, []]))
    }]
  };
}

test("research structure validates without mutation; browser payload equals canonical research", () => {
  const before = JSON.stringify(research);
  assert.equal(checked.valid, true, checked.problems.join("\n"));
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), context);
  assert.deepEqual(JSON.parse(JSON.stringify(context.window.ELECTION_DATA)), research);
  assert.equal(JSON.stringify(research), before);
});

test("the published reading guide exists, has the requested breadth, and serializes exactly", () => {
  assert.ok(guide, "Integration blocker: data\\issue-guide.json has not been delivered");
  const result = app.validateIssueGuide(guide, research, checked.evidenceIndex);
  assert.equal(result.valid, true, result.problems.join("\n"));
  assert.ok(guide.questions.length >= 32, "Maintain the researched 32-subject breadth without numeric political stances");
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, "issue-data.js"), "utf8"), context);
  assert.deepEqual(JSON.parse(JSON.stringify(context.window.ISSUE_GUIDE)), guide);
});

test("roster records have explicit coverage metadata; enumeration is not assumed official verification", () => {
  assert.ok(research.roster, "Integration blocker: roster coverage and enumeration metadata are required");
  assert.ok(["complete", "partial", "unverified"].includes(research.roster.completeness));
  assert.ok(research.roster.basisHe.trim());
  assert.deepEqual(new Set(research.roster.entries.map(({ id }) => id)), new Set(research.parties.map(({ id }) => id)));
  for (const id of research.roster.authoritySourceIds) {
    assert.equal(research.sources.find((source) => source.id === id)?.sourceType, "electoral_authority");
  }
  if (research.roster.completeness === "complete") {
    assert.ok(research.roster.authoritySourceIds.length + research.roster.enumerationSourceIds.length > 0);
  }
  const rendered = new Set(app.currentParties(research).map(({ id }) => id));
  for (const entry of research.roster.entries) {
    if (["withdrawn", "rejected"].includes(entry.status)) assert.equal(rendered.has(entry.id), false);
  }
});

test("source integrity is metadata and reference integrity, not a factual truth certificate", () => {
  const sources = new Map(research.sources.map((source) => [source.id, source]));
  assert.equal(sources.size, research.sources.length);
  for (const source of sources.values()) {
    assert.ok(source.title.trim() && source.publisher.trim());
    assert.ok(app.publicSourceURL(source.url));
    assert.ok(source.publicationDate === null || app.validDate(source.publicationDate));
    assert.ok(app.validDate(source.asOfDate));
    assert.ok(app.validTimestamp(source.retrievedAt));
    assert.ok(source.accessNotesHe === null || typeof source.accessNotesHe === "string");
  }
  for (const item of checked.evidenceIndex.values()) {
    for (const sourceId of item.sourceIds) assert.ok(sources.has(sourceId), `Dangling source: ${sourceId}`);
    for (const id of item.contradictionIds) assert.ok(id !== item.id && checked.evidenceIndex.has(id));
    if (item.status === "missing") assert.ok(item.missingEvidenceLabelHe?.trim());
    if (item.status === "uncertain") assert.ok(item.uncertaintyLabelHe?.trim());
    if (["declared", "historical"].includes(item.status)) assert.ok(item.sourceIds.length > 0);
  }
});

test("invalid source metadata, broken references and unsupported official claims fail closed", () => {
  for (const mutate of [
    (data) => { data.sources[0].title = ""; },
    (data) => { data.sources[0].url = "javascript:alert(1)"; },
    (data) => { data.sources[0].publicationDate = "2026-02-30"; },
    (data) => { data.sources[0].retrievedAt = "2026-10-09T09:00:00"; },
    (data) => { data.parties[0].identityEvidence.sourceIds = ["source_that_does_not_exist"]; },
    (data) => { data.parties[0].identityEvidence.contradictionIds = [data.parties[0].identityEvidence.id]; },
    (data) => { data.election.dateConfirmationStatus = "confirmed"; data.election.dateSourceIds = []; },
    (data) => { data.coverage.includedPartyIds = []; },
    (data) => { data.parties[0].identityEvidence.status = "officially_verified"; }
  ]) {
    const data = clone();
    mutate(data);
    assert.equal(app.validateResearch(data).valid, false);
    assert.equal(app.loadData(data), false);
  }
  assert.equal(app.validateResearch(null).valid, false);
  assert.equal(app.loadData(undefined), false);
});

test("exact evidence IDs resolve to their own sources, without topic or keyword fallback", () => {
  assert.ok(guide, "Integration blocker: issue guide absent");
  const question = guide.questions.find((entry) => Object.values(entry.evidenceByParty).some((ids) => ids.length));
  assert.ok(question, "The researched guide must contain source-backed evidence to exercise exact resolution");
  const rows = app.buildIssueRows(research, guide, question.id);
  for (const row of rows) {
    const references = question.evidenceByParty[row.party.id];
    assert.deepEqual(row.linkedEvidence.map(({ id }) => id), references);
    assert.deepEqual(row.evidence, references.map((id) => checked.evidenceIndex.get(id)));
    for (const item of row.evidence) assert.deepEqual(item.sourceIds, checked.evidenceIndex.get(item.id).sourceIds);
    if (!references.length) assert.deepEqual(row.evidence, [], "A gap must not borrow a general position or another party's evidence");
  }
});

test("missing, foreign, duplicate and numeric guide references are rejected, never guessed", () => {
  const first = research.parties[0];
  const second = research.parties[1];
  assert.ok(first && second);
  for (const mutate of [
    (g) => { g.questions[0].evidenceByParty[first.id] = ["absent_evidence"]; },
    (g) => { g.questions[0].evidenceByParty[first.id] = [second.identityEvidence.id]; },
    (g) => { g.questions[0].evidenceByParty[first.id] = [first.identityEvidence.id, first.identityEvidence.id]; },
    (g) => { g.questions[0].evidenceByParty[first.id] = [0]; },
    (g) => { delete g.questions[0].evidenceByParty[first.id]; },
    (g) => { g.questions[0].stances = {}; },
    (g) => { g.questions.push(structuredClone(g.questions[0])); }
  ]) {
    const fixture = emptyGuide();
    mutate(fixture);
    assert.equal(app.validateIssueGuide(fixture, research, checked.evidenceIndex).valid, false);
    assert.deepEqual(app.buildIssueRows(research, fixture, fixture.questions[0].id), []);
  }
  assert.equal(app.validateIssueGuide(null, research).valid, false);
  assert.equal(app.validateIssueGuide(emptyGuide(), { ...research, parties: [null] }).valid, false);
  assert.deepEqual(app.buildIssueRows(research, null, "absent"), []);
});

test("unknown is an evidence gap, never opposition, neutrality, agreement or a numeric score", () => {
  const fixture = emptyGuide();
  for (const filter of ["all", "declared", "documented", "context"]) {
    const rows = app.buildIssueRows(research, fixture, fixture.questions[0].id, filter);
    assert.equal(rows.length, app.currentParties(research).length);
    for (const row of rows) {
      assert.equal(row.hasGap, true);
      assert.deepEqual(row.evidence, []);
      assert.deepEqual(row.linkedEvidence, []);
      for (const key of ["val", "stance", "score", "matchPercentage", "agreements", "disagreements"]) assert.equal(Object.hasOwn(row, key), false);
    }
  }
});

test("evidence filters keep every party and every missing label in a fixed alphabetical order", () => {
  const fixture = emptyGuide();
  const candidates = app.currentParties(research).flatMap((owner) =>
    Object.entries(owner.topicPositions).map(([topicId, bucket]) => ({
      owner, topicId,
      gap: bucket.gaps.find((item) => item.status === "missing"),
      declaration: bucket.positions.find((item) => item.status === "declared")
    })));
  const candidate = candidates.find(({ gap, declaration }) => gap && declaration);
  assert.ok(candidate, "Use an actual researched topic containing both a declared position and an explicit gap");
  const { owner, topicId, gap, declaration } = candidate;
  fixture.questions[0].topicId = topicId;
  fixture.questions[0].evidenceByParty[owner.id] = [declaration.id, gap.id];
  const expected = app.currentParties(research).map(({ id }) => id);
  for (const filter of ["all", "declared", "documented", "context"]) {
    const rows = app.buildIssueRows(research, fixture, fixture.questions[0].id, filter);
    assert.deepEqual(rows.map(({ party }) => party.id), expected);
    const row = rows.find(({ party }) => party.id === owner.id);
    assert.deepEqual(row.evidence.find(({ id }) => id === gap.id), gap, "Filtering must retain the complete missing-evidence label and metadata");
    assert.deepEqual(row.linkedEvidence.map(({ id }) => id), [declaration.id, gap.id]);
  }
});

test("guide links cannot borrow an unrelated topic from the same party", () => {
  assert.ok(guide, "Integration blocker: issue guide absent");
  const ownership = app.evidenceOwnership(research);
  const question = guide.questions.find((entry) => Object.values(entry.evidenceByParty).some((ids) => ids.length));
  const [ownerId] = Object.entries(question.evidenceByParty).find(([, ids]) => ids.length);
  const unrelated = [...checked.evidenceIndex.values()].find((item) => {
    const owner = ownership.get(item.id);
    return owner?.partyId === ownerId && owner.topicId && owner.topicId !== question.topicId;
  });
  assert.ok(unrelated, "Use existing evidence from another researched topic, not fabricated evidence");
  const fixture = structuredClone(guide);
  fixture.questions.find(({ id }) => id === question.id).evidenceByParty[ownerId] = [unrelated.id];
  assert.equal(app.validateIssueGuide(fixture, research, checked.evidenceIndex).valid, false);
  assert.deepEqual(app.buildIssueRows(research, fixture, question.id), []);
});

test("each delivered question preserves exact per-party links and order in every evidence mode", () => {
  assert.ok(guide, "Integration blocker: issue guide absent");
  const expected = app.currentParties(research).map(({ id }) => id);
  for (const question of guide.questions) {
    for (const filter of ["all", "declared", "documented", "context"]) {
      const rows = app.buildIssueRows(research, guide, question.id, filter);
      assert.deepEqual(rows.map(({ party }) => party.id), expected);
      for (const row of rows) {
        assert.deepEqual(row.linkedEvidence.map(({ id }) => id), question.evidenceByParty[row.party.id]);
        for (const item of row.evidence) assert.ok(question.evidenceByParty[row.party.id].includes(item.id));
      }
    }
  }
});

test("ballot labels need explicit source references; unknown letters have no fallback", () => {
  const data = clone();
  const party = data.parties[0];
  party.ballotLetters = "בדיקת תצוגה";
  delete party.ballotSourceIds;
  if (data.roster) {
    const entry = data.roster.entries.find(({ id }) => id === party.id);
    entry.ballotLetters = null;
  }
  assert.equal(app.ballotInfo(party, data), null);
  party.ballotSourceIds = [data.sources[0].id];
  if (data.roster) assert.equal(app.ballotInfo(party, data), null, "Unknown current-roster letters cannot fall back to older party metadata");
  delete data.roster;
  assert.deepEqual(app.ballotInfo(party, data), { letters: party.ballotLetters, sourceIds: party.ballotSourceIds });
  party.ballotLetters = null;
  assert.equal(app.ballotInfo(party, data), null);
});

test("optional roster, aliases and ballot references validate without mutating legacy research", () => {
  const data = clone();
  delete data.roster;
  data.parties[0].aliases = ["שם חלופי לבדיקת מבנה"];
  data.parties[0].componentNames = ["מרכיב לבדיקת מבנה"];
  data.parties[0].ballotSourceIds = [data.sources[0].id];
  assert.equal(app.validateResearch(data).valid, true);
  assert.equal(app.nameMatches(data.parties[0], "שם חלופי"), true);
  data.parties[0].ballotSourceIds = ["unresolvable"];
  assert.equal(app.validateResearch(data).valid, false);
});
