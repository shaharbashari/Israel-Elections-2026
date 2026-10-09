"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { validateResearchContract, validateIssueGuide } = require("../assemble_research.js");
const root = path.join(__dirname, "..");
const read = name => JSON.parse(fs.readFileSync(path.join(root, "data", name), "utf8"));
const research = read("research.json");
const guide = read("issue-guide.json");
const report = read("fact-check-report.json");
const partyIds = research.parties.map(p => p.id);
const sourceIndex = new Map(research.sources.map(s => [s.id, s]));
const evidenceIndex = new Map();

function walk(value, visitor) {
  if (!value || typeof value !== "object") return;
  visitor(value);
  for (const child of Object.values(value)) walk(child, visitor);
}
walk(research, value => {
  if (value.id && value.summaryHe && Array.isArray(value.sourceIds)) {
    assert(!evidenceIndex.has(value.id), `Duplicate evidence ${value.id}`);
    evidenceIndex.set(value.id, value);
  }
});

test("research-v1 and the neutral issue contract validate", () => {
  assert.equal(validateResearchContract(research), research);
  assert.equal(validateIssueGuide(guide, research), guide);
  assert.equal(research.topics.length, 6);
});

test("classic browser scripts deep-equal their canonical JSON", () => {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), context);
  vm.runInNewContext(fs.readFileSync(path.join(root, "issue-data.js"), "utf8"), context);
  assert.deepEqual(JSON.parse(JSON.stringify(context.window.ELECTION_DATA)), research);
  assert.deepEqual(JSON.parse(JSON.stringify(context.window.ISSUE_GUIDE)), guide);
  assert.deepEqual(Object.keys(context.window).sort(), ["ELECTION_DATA", "ISSUE_GUIDE"]);
});

test("38 reported submissions remain distinct from authoritative approval", () => {
  assert.equal(research.parties.length, 38);
  assert.equal(research.roster.entries.length, 38);
  assert.equal(research.roster.completeness, "partial");
  assert.deepEqual(research.roster.authoritySourceIds, []);
  assert(research.roster.entries.every(e => e.status === "submitted"));
  assert(research.parties.every(p => p.listStatus === "unverified"));
  assert.equal(research.election.verifiedDate, null);
  assert.equal(research.election.dateConfirmationStatus, "uncertain");
  assert.equal(new Set(partyIds).size, 38);
  assert.equal(new Set(research.parties.map(p => p.ballotLetters)).size, 38);
  assert(!partyIds.includes("balad") && !partyIds.includes("hadash_taal"));
  assert.deepEqual(research.parties.find(p => p.id === "joint_list").componentNames, ["חד״ש", "תע״ל", "בל״ד"]);
  assert.deepEqual(research.parties.find(p => p.id === "beyachad").componentNames, ["בנט 2026", "יש עתיד"]);
});

test("source references, IDs and actual retrieval timestamps are internally consistent", () => {
  assert.equal(sourceIndex.size, research.sources.length);
  assert(research.sources.length <= 100 && research.parties.length <= 60);
  assert(new Set(research.sources.map(s => s.retrievedAt)).size > 1);
  for (const source of research.sources) {
    assert.match(source.id, /^[a-z][a-z0-9_-]*$/);
    assert.match(source.url, /^https:\/\//);
    assert(Number.isFinite(Date.parse(source.retrievedAt)));
    assert(Date.parse(source.retrievedAt) <= Date.parse(report.generatedAt));
    assert.equal(source.asOfDate, research.asOfDate);
    if (source.publicationDate !== null) assert(source.publicationDate <= research.asOfDate);
  }
  for (const item of evidenceIndex.values()) {
    assert.match(item.id, /^[a-z][a-z0-9_-]*$/);
    for (const sourceId of item.sourceIds) assert(sourceIndex.has(sourceId), `${item.id}: ${sourceId}`);
    for (const contradiction of item.contradictionIds) assert(evidenceIndex.has(contradiction));
    if (item.eventDate) assert(item.eventDate <= item.asOfDate);
    if (!item.sourceIds.length) assert(item.missingEvidenceLabelHe);
  }
});

test("every party receives all reading subjects in canonical order; missing is an empty array", () => {
  assert(guide.questions.length >= 32);
  assert.equal(new Set(guide.questions.map(q => q.id)).size, guide.questions.length);
  const requiredSubjects = [
    "q_palestinian_state", "q_gaza_day_after", "q_settlements", "q_death_penalty",
    "q_free_market", "q_housing_prices", "q_welfare_allowances", "q_minimum_wage_workers",
    "q_judicial_reform", "q_state_inquiry", "q_term_limits", "q_arab_integration",
    "q_civil_marriage", "q_conversion_reform", "q_kashrut_religious_services", "q_lgbtq_rights",
    "q_haredi_conscription", "q_core_curriculum", "q_healthcare_periphery", "q_nation_state_law",
    "q_shabbat_transport", "q_renewable_energy_climate", "q_public_transit_congestion", "q_open_spaces_development",
    "q_hostage_deal", "q_law_of_return_grandchild", "q_internal_security_police", "q_agriculture_local_vs_import",
    "q_us_israel_relations_defense", "q_hightech_taxation_innovation", "q_attorney_general_split", "q_mandatory_civil_service"
  ];
  const ids = new Set(guide.questions.map(q => q.id));
  for (const id of requiredSubjects) assert(ids.has(id), `Lost reading subject ${id}`);
  for (const q of guide.questions) {
    assert.deepEqual(Object.keys(q.evidenceByParty), partyIds);
    for (const items of Object.values(q.evidenceByParty)) assert(Array.isArray(items));
  }
  const unknown = guide.questions.find(q => q.id === "q_hightech_taxation_innovation");
  assert(Object.values(unknown.evidenceByParty).every(items => items.length === 0));
});

test("every linked issue ID has exact party/topic ownership and a reviewed issue-specific locator", () => {
  const reviewed = new Map(report.retainedClaims.filter(c => c.evidenceId).map(c => [c.evidenceId, c]));
  const ownership = new Map();
  for (const p of research.parties) for (const [topicId, bucket] of Object.entries(p.topicPositions)) {
    for (const category of ["positions", "promises", "records", "contextualReporting"]) {
      for (const item of bucket[category]) ownership.set(item.id, { partyId: p.id, topicId });
    }
  }
  for (const q of guide.questions) for (const [partyId, ids] of Object.entries(q.evidenceByParty)) {
    for (const id of ids) {
      assert.deepEqual(ownership.get(id), { partyId, topicId: q.topicId });
      const claim = reviewed.get(id);
      assert(claim && claim.issueIds.includes(q.id), `Unreviewed semantic link ${q.id}/${id}`);
      assert(claim.locatorHe && claim.supportNoteHe && claim.sourceIds.length);
      assert.equal(evidenceIndex.get(id).status, "declared");
    }
  }
});

test("source-backed retained evidence has an auditable claim record", () => {
  assert.equal(new Set(report.retainedClaims.map(c => c.claimId)).size, report.retainedClaims.length);
  for (const item of evidenceIndex.values()) if (item.sourceIds.length) {
    const claim = report.retainedClaims.find(c => c.claimId === item.id);
    assert(claim, `Missing retained claim ${item.id}`);
    assert.equal(claim.evidenceId, item.id);
    assert.equal(claim.claimHe, item.summaryHe);
    assert.deepEqual(claim.sourceIds, item.sourceIds);
    assert(["checked_source_support", "checked_declaration", "checked_reporting"].includes(claim.checkedStatus));
    assert(claim.locatorHe && claim.supportNoteHe);
  }
  for (const claim of report.retainedClaims) for (const id of claim.sourceIds) assert(sourceIndex.has(id));
  assert.equal(report.counts.retainedClaims, report.retainedClaims.length);
  assert.equal(report.counts.retiredLegacySourceBackedEvidence, report.removedClaims.length);
});

test("unsupported ratings, quotations and personal alignment are absent from publishable data", () => {
  const forbidden = new Set(["val", "stance", "stances", "score", "scores", "weights", "answers", "quote", "matchPercentage", "recommendations"]);
  for (const data of [research, guide]) walk(data, value => {
    for (const key of Object.keys(value)) assert(!forbidden.has(key), `Retired field ${key}`);
  });
  assert.equal(fs.existsSync(path.join(root, "quiz-data.js")), false);
  assert.equal(report.counts.retiredNumericalPolicyCells, 448);
});

test("court reporting and component publications are not elevated to stronger claims", () => {
  assert.equal(sourceIndex.get("s_joint_court_reporting").sourceType, "independent_reporting");
  const withdrawal = evidenceIndex.get("e_joint_list_abu_shehadeh_withdrawal");
  assert.match(withdrawal.summaryHe, /ללא הכרעה סופית/);
  for (const item of evidenceIndex.values()) if (item.sourceIds.includes("s_miluimnikim_platform")) {
    assert.match(item.summaryHe, /מרכיב המילואימניקים/);
    assert.match(item.detailHe, /מרכיב המילואימניקים בלבד/);
  }
  assert.match(evidenceIndex.get("e_beyachad_conversion").summaryHe, /אורתודוקסי/);
  assert.match(evidenceIndex.get("e_beyachad_civil_union").summaryHe, /ברית זוגיות/);
});

test("the three legacy policy exports are an exhaustive nonduplicating view of canonical data", () => {
  const parts = [require("../policy_data_part1.js"), require("../policy_data_part2.js"), require("../policy_data_part3.js")];
  const ids = parts.flatMap(p => Object.keys(p));
  assert.equal(ids.length, partyIds.length);
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual(new Set(ids), new Set(partyIds));
  for (const part of parts) for (const [id, buckets] of Object.entries(part)) {
    const party = research.parties.find(p => p.id === id);
    for (const [topicId, value] of Object.entries(buckets)) {
      const bucket = party.topicPositions[topicId];
      assert.deepEqual(value.position, bucket.positions[0] || null);
      assert.deepEqual(value.promise, bucket.promises[0] || null);
      assert.deepEqual(value.record, bucket.records[0] || null);
      assert.deepEqual(value.context, bucket.contextualReporting[0] || null);
      assert.deepEqual(value.gaps, bucket.gaps);
    }
  }
});

test("the research budget and honest coverage counts reconcile", () => {
  assert.equal(report.accessOutcomes.reduce((n, entry) => n + entry.requestCount, 0), report.budget.sourceRetrievalRequests);
  assert.equal(report.budget.originalPageAndPdfRequests + report.budget.publicStaticAssetRequests, report.budget.sourceRetrievalRequests);
  const supplementalAllowance = report.budget.supplementalRetrievalAllowance || 0;
  assert(report.budget.sourceRetrievalRequests <= 75 + supplementalAllowance && report.budget.webSearchCalls <= 12);
  if (supplementalAllowance) {
    assert(report.budget.originalAuditSourceRetrievals <= 75);
    assert(report.budget.supplementalSourceRetrievals <= supplementalAllowance);
    assert.equal(report.budget.originalAuditSourceRetrievals + report.budget.supplementalSourceRetrievals, report.budget.sourceRetrievalRequests);
    assert.equal(report.boundedOfficialBrowserReview.browserPasses, 1);
    assert.equal(report.boundedOfficialBrowserReview.profileRemoved, true);
  }
  assert.equal(report.counts.rosterEntries, research.parties.length);
  assert.equal(report.counts.sources, research.sources.length);
  assert.equal(report.counts.issueQuestions, guide.questions.length);
  assert.equal(report.counts.issueQuestionsWithEvidence, guide.questions.filter(q => Object.values(q.evidenceByParty).some(a => a.length)).length);
  assert.deepEqual(report.schemaDeviations, []);
});

test("invalid claims of completeness and unrelated topic links are rejected", () => {
  const falseComplete = structuredClone(research);
  falseComplete.roster.completeness = "complete";
  assert.throws(() => validateResearchContract(falseComplete));
  const wrongLink = structuredClone(guide);
  wrongLink.questions.find(q => q.id === "q_death_penalty").evidenceByParty.beyachad = ["e_beyachad_core"];
  assert.throws(() => validateIssueGuide(wrongLink, research), /Unrelated/);
});
