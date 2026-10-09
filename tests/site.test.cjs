"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const app = require("../app.js");
const root = path.join(__dirname, "..");
const read = (filename) => fs.readFileSync(path.join(root, filename), "utf8");
const html = read("index.html");
const source = read("app.js");
const css = read("styles.css");

test("personal scoring, political answers, recommendations and exports are removed, not merely hidden", () => {
  for (const name of ["calculateMatchResults", "hasRatedStance", "quizState", "PARTY_BALLOT_LETTERS", "apply2026PartyUpdates"]) {
    assert.equal(app[name], undefined);
    assert.equal(source.includes(name), false);
  }
  for (const text of [html, source, css]) {
    assert.doesNotMatch(text, /quiz-data|select-stance|data-stance|matchPercentage|podium|leaderboard|confetti|share-results|calculateMatch/iu);
  }
  assert.doesNotMatch(source, /\bnavigator\.(?:share|clipboard)\b|\bBlob\s*\(|download\s*=/u);
  assert.match(html, /בלי שאלות על העמדות שלכם/u);
  assert.match(html, /ללא דירוג|בלי דירוג/u);
});

test("canonical Hebrew sorting is deterministic, nonmutating, and independent of reading choices", () => {
  const entries = [{ id: "last", nameHe: "תשתיות" }, { id: "b", nameHe: "בריאות" }, { id: "a", nameHe: "בריאות" }, { id: "first", nameHe: "אנרגיה" }];
  const before = structuredClone(entries);
  assert.deepEqual(app.canonicalOrder(entries).map(({ id }) => id), ["first", "a", "b", "last"]);
  assert.deepEqual(entries, before);
  assert.equal(app.normaliseName(" כַּלְכָּלָה  "), app.normaliseName("כלכלה"));
  assert.equal(app.normaliseName("ＡＢＣ"), "abc");
  const party = { nameHe: "שם רשימה", aliases: ["כינוי"], componentNames: ["מרכיב"], identityEvidence: { summaryHe: "טקסט עמדה בלבד" } };
  assert.equal(app.nameMatches(party, "כינוי"), true);
  assert.equal(app.nameMatches(party, "מרכיב"), true);
  assert.equal(app.nameMatches(party, "טקסט עמדה"), false);
});

test("comparison is explicit, capped at four, and never substitutes a fifth party", () => {
  const selected = new Set();
  assert.equal(app.COMPARISON_LIMIT, 4);
  for (const id of ["d", "c", "b", "a"]) assert.equal(app.updateSelection(selected, id), "added");
  assert.equal(app.updateSelection(selected, "e"), "blocked");
  assert.deepEqual([...selected], ["d", "c", "b", "a"]);
  assert.equal(app.updateSelection(selected, "c"), "removed");
  assert.equal(app.updateSelection(selected, "e"), "added");
  assert.deepEqual([...selected], ["d", "b", "a", "e"]);
});

test("reset and fresh-load defaults discard all transient reading and comparison state", () => {
  const state = app.createReadingState();
  assert.equal(state.view, "overview");
  assert.equal(state.topics.size, 0);
  assert.equal(state.comparison.size, 0);
  assert.equal(state.reading, false);
  const oldTopics = state.topics;
  const oldComparison = state.comparison;
  state.view = "compare";
  state.step = 3;
  state.topics.add("technical-test-topic");
  state.comparison.add("technical-test-id");
  state.evidence = "documented";
  state.depth = "deep";
  state.search = "test";
  state.reading = true;
  state.questionId = "technical-test-question";
  state.comparisonQuestionId = "technical-test-question";
  app.resetReadingState(state);
  assert.deepEqual(state, app.createReadingState());
  assert.notEqual(state.topics, oldTopics);
  assert.notEqual(state.comparison, oldComparison);
  assert.deepEqual(app.createReadingState(), app.createReadingState(), "fresh loads never recover reading choices");
  assert.match(source, /function initialise\(\)\s*\{\s*loadData\(window\.ELECTION_DATA, window\.ISSUE_GUIDE\)/u);
  assert.match(source, /function loadData\([^]*?resetReadingState\(state\)/u);
});

test("static client has no storage, network, telemetry or answer-in-URL code paths", () => {
  assert.doesNotMatch(source, /\b(?:localStorage|sessionStorage|indexedDB|cookieStore|serviceWorker|sendBeacon|WebSocket|XMLHttpRequest|fetch)\b/u);
  assert.doesNotMatch(source, /document\.cookie|\bconsole\.|\bURLSearchParams\b|history\.(?:pushState|replaceState)|location\.(?:search|hash|href)\s*=/u);
  assert.doesNotMatch(html, /<form\b|type="submit"|(?:src|href)="https?:/iu);
  assert.doesNotMatch(css, /@import|url\(\s*["']?https?:/iu);
  assert.match(html, /connect-src 'none'/u);
  assert.match(html, /font-src 'none'/u);
  assert.match(read("README.md"), /יומני גישה ומטמונים/u);
});

test("runtime source content uses text nodes and validated public links only", () => {
  assert.doesNotMatch(source, /\b(?:innerHTML|outerHTML|insertAdjacentHTML|document\.write)\b|\beval\s*\(|new Function\b/u);
  assert.match(source, /node\.textContent = String\(text\)/u);
  assert.match(source, /link\.rel = "noopener noreferrer"/u);
  assert.match(source, /link\.referrerPolicy = "no-referrer"/u);
  for (const url of [
    "javascript:alert(1)", "data:text/html,test", "file:///C:/index.html",
    "http://localhost/", "http://2130706433/", "http://[::1]/", "http://10.0.0.1/",
    "http://192.168.0.1/", "http://169.254.169.254/", "https://user:secret@www.gov.il/",
    "https://www.gov.il\\@example.org/", "https://www.gov.il/\nunsafe"
  ]) assert.equal(app.publicSourceURL(url), null, url);
  assert.equal(app.publicSourceURL("https://www.gov.il/he"), "https://www.gov.il/he");
});

test("classic local script order and semantic RTL controls support file opening", () => {
  assert.match(html, /<html lang="he" dir="rtl">/u);
  assert.match(html, /<script defer src="data\.js"><\/script>\s*<script defer src="issue-data\.js"><\/script>\s*<script defer src="app\.js"><\/script>/u);
  assert.doesNotMatch(html, /type="module"/u);
  assert.equal((html.match(/<nav\b/gu) || []).length, 1);
  assert.match(html, /class="skip-link" href="#main"/u);
  assert.equal((html.match(/<dialog\b/gu) || []).length, 2);
  assert.match(source, /dialog\.addEventListener\("close"/u);
  assert.match(source, /dialog\.showModal\(\)/u);
  assert.match(source, /dialogTriggers\.set/u);
  assert.match(html, /<progress[^>]*max="3"/u);
  assert.doesNotMatch(html, /role="tab"|tabindex="[1-9]/u);
  assert.match(css, /prefers-reduced-motion: reduce/u);
});

test("local original illustrations are self-contained and have no remote or executable content", () => {
  const assets = ["mark.svg", "reading-room.svg", "topic-economy.svg", "topic-world.svg", "topic-civic.svg", "topic-community.svg", "topic-society.svg", "topic-environment.svg"];
  for (const filename of assets) {
    const svg = read(path.join("assets", filename));
    assert.match(svg, /^<svg\b/u);
    assert.doesNotMatch(svg, /<script|foreignObject|onload=|javascript:|(?:href|src)=["']https?:/iu);
  }
  assert.match(html, /assets\/reading-room\.svg/u);
  assert.match(read("README.md"), /נוצרו במיוחד לפרויקט/u);
});
