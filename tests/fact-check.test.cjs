"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const app = require("../app.js");
const root = path.join(__dirname, "..");
const research = JSON.parse(fs.readFileSync(path.join(root, "data", "research.json"), "utf8"));
const quiz = structuredClone(require("../quiz-data.js"));
const questions = quiz.QUIZ_QUESTIONS;
const party = id => research.parties.find(p => p.id === id);
const question = id => questions.find(q => q.id === id);

test("research validates and browser data is the exact canonical object", () => {
  const result = app.validateResearch(research);
  assert.equal(result.valid, true, result.problems.join("\n"));
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), context);
  assert.deepEqual(JSON.parse(JSON.stringify(context.window.ELECTION_DATA)), research);
});

test("all 32 questions and 448 canonical party positions have honest evidence status", () => {
  assert.equal(research.parties.length, 14);
  assert.equal(questions.length, 32);
  assert.equal(new Set(questions.map(q => q.id)).size, 32);
  const ids = new Set(research.sources.map(s => s.id));
  let rated = 0, missing = 0;
  for (const q of questions) {
    assert.deepEqual(new Set(Object.keys(q.stances)), new Set(research.parties.map(p => p.id)));
    for (const s of Object.values(q.stances)) {
      assert.ok(s.note && s.asOfDate);
      assert.equal(Object.hasOwn(s, "quote"), false, "Paraphrases must not masquerade as quotations");
      for (const id of s.sourceIds) assert.ok(ids.has(id), `Unknown source ${id}`);
      if (s.val === null) {
        missing++;
        assert.equal(s.status, "missing");
        assert.equal(app.hasRatedStance(s), false);
      } else {
        rated++;
        assert.ok(Number.isInteger(s.val) && s.val >= -2 && s.val <= 2);
        assert.ok(s.sourceIds.length > 0);
        assert.equal(s.status, "assessment");
      }
    }
  }
  assert.equal(rated + missing, 448);
  assert.equal(rated, quiz.QUIZ_FACT_CHECK.sourcedRatings);
  assert.equal(missing, quiz.QUIZ_FACT_CHECK.missingRatings);
});

test("ballots and shared-list components cannot revert to obsolete letters", () => {
  for (const [id, letters] of Object.entries({ beyachad:"רק", otzma_yehudit:"ב", noam:"ני", hadash_taal:"ודם", balad:"ודם" })) {
    assert.equal(party(id).ballotLetters, letters);
    assert.equal(app.PARTY_BALLOT_LETTERS[id], letters);
  }
  const snapshot = structuredClone(research.parties);
  app.apply2026PartyUpdates(snapshot);
  assert.deepEqual(snapshot, research.parties);
  assert.notEqual(research.coverage.partyCoverageBasis, "confirmed_official_list");
  assert.notEqual(research.election.listConfirmationStatus, "confirmed");
});

test("leadership and historical candidacy distinctions are preserved", () => {
  assert.equal(party("hadash_taal").leaderSummaries[0].id, "yousef_jabareen");
  assert.equal(party("utj").leaderSummaries[0].id, "yaakov_asher");
  assert.match(party("balad").leaderSummaries[0].candidacyEvidence.summaryHe, /פרש/);
  assert.match(party("utj").leaderSummaries.find(l => l.id === "moshe_gafni").publicRole.summaryHe, /הוסר/);
  assert.equal(app.getPartyLeaderNames(party("likud")), "בנימין נתניהו");
  assert.doesNotMatch(app.getPartyLeaderNames(party("utj")), /משה גפני/);
});

test("conversion does not equate Orthodox decentralization with Reform recognition", () => {
  const q = question("q_conversion_reform");
  assert.match(q.statement, /אורתודוקסי/);
  assert.doesNotMatch(q.statement, /רפורמים|קונסרבטיבים/);
  assert.equal(q.stances.beyachad.val, 2);
  assert.match(q.stances.beyachad.note, /אין כאן ייחוס/);
});

test("time-sensitive questions do not assert ongoing captivity or an unpassed death-penalty law", () => {
  assert.match(question("q_hostage_deal").statement, /עתידי/);
  assert.match(question("q_hostage_deal").explanation, /26 בינואר 2026/);
  assert.match(question("q_death_penalty").explanation, /30 במרץ 2026/);
  assert.doesNotMatch(question("q_mandatory_civil_service").statement, /כתנאי לזכויות אזרחיות/);
});

test("unknown is distinct from an actual documented zero", () => {
  assert.equal(app.hasRatedStance({ val:null, status:"missing" }), false);
  assert.equal(app.hasRatedStance({ val:0, status:"assessment" }), true);
  assert.equal(app.hasRatedStance({ val:0, status:"missing" }), false);
  assert.equal(app.hasRatedStance({ val:"0" }), false);
  assert.equal(app.hasRatedStance({ val:3 }), false);
});

test("an unanswered-evidence question never creates a fake 50% or neutral match", () => {
  assert.equal(app.loadData(structuredClone(research)), true);
  app.quizState.answers.clear();
  app.quizState.answers.set("q_hightech_taxation_innovation", { stance:2, important:true });
  const results = app.calculateMatchResults();
  assert.equal(results.length, 14);
  for (const result of results) {
    assert.equal(result.matchPercentage, null);
    assert.equal(result.matchedQuestionCount, 0);
    assert.equal(result.missingQuestionCount, 1);
    assert.equal(result.agreements.length, 0);
    assert.equal(result.disagreements.length, 0);
  }
});

test("unsupported answers are excluded from both numerator and denominator", () => {
  app.quizState.answers.clear();
  app.quizState.answers.set("q_term_limits", { stance:2, important:false });
  app.quizState.answers.set("q_hightech_taxation_innovation", { stance:-2, important:true });
  const result = app.calculateMatchResults().find(r => r.party.id === "yisrael_beitenu");
  assert.equal(result.matchPercentage, 100);
  assert.equal(result.matchedQuestionCount, 1);
  assert.equal(result.missingQuestionCount, 1);
});

test("known answers still use the existing distance and importance weighting", () => {
  app.quizState.answers.clear();
  app.quizState.answers.set("q_core_curriculum", { stance:2, important:true });
  app.quizState.answers.set("q_gaza_day_after", { stance:-2, important:false });
  const result = app.calculateMatchResults().find(r => r.party.id === "yisrael_beitenu");
  assert.equal(result.matchPercentage, 67);
  assert.equal(result.matchedQuestionCount, 2);
  assert.equal(result.missingQuestionCount, 0);
  app.quizState.answers.clear();
});

test("legacy policy modules derive from the current canonical source", () => {
  const parts = [require("../policy_data_part1.js"), require("../policy_data_part2.js"), require("../policy_data_part3.js")];
  assert.deepEqual(new Set(parts.flatMap(p => Object.keys(p))), new Set(research.parties.map(p => p.id)));
  for (const part of parts) for (const [id, positions] of Object.entries(part)) {
    for (const [topic, value] of Object.entries(positions)) {
      assert.deepEqual(value.position, party(id).topicPositions[topic].positions[0] || null);
      assert.deepEqual(value.gaps, party(id).topicPositions[topic].gaps);
    }
  }
});
