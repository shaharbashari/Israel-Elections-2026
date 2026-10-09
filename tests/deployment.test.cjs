"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const {
  ROOT, OUTPUT_DIRECTORY, REQUIRED_FILES, OPTIONAL_FILES, ASSET_FILES, ALLOWED_FILES, readReleaseFiles, buildSite
} = require("../scripts/build-site.cjs");

const fixtureBase = path.join(ROOT, ".pages-test-fixtures");
let fixtureNumber = 0;

function removeFixture(directory) {
  const relative = path.relative(fixtureBase, directory);
  assert.ok(relative && relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative));
  const stat = fs.lstatSync(directory);
  if (stat.isSymbolicLink() || !stat.isDirectory()) {
    fs.unlinkSync(directory);
    return;
  }
  for (const name of fs.readdirSync(directory)) removeFixture(path.join(directory, name));
  fs.rmdirSync(directory);
}

function write(root, relative, content) {
  const filename = path.join(root, ...relative.split("/"));
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, content);
}

function fixture(t) {
  if (!fs.existsSync(fixtureBase)) fs.mkdirSync(fixtureBase);
  assert.equal(fs.lstatSync(fixtureBase).isSymbolicLink(), false);
  assert.equal(fs.realpathSync.native(fixtureBase).toLowerCase(), fixtureBase.toLowerCase());
  const owned = path.join(fixtureBase, `case-${process.pid}-${++fixtureNumber}`);
  fs.mkdirSync(owned);
  t.after(() => removeFixture(owned));
  const root = path.join(owned, "site");
  fs.mkdirSync(root);
  write(root, "index.html", '<!doctype html><html lang="he" dir="rtl"><head><link rel="stylesheet" href="styles.css">' +
    '<script defer src="data.js"></script><script defer src="issue-data.js"></script><script defer src="app.js"></script>' +
    '</head><body><a href="https://example.org/evidence">מקור</a></body></html>');
  write(root, "styles.css", "body { direction: rtl; }");
  write(root, "data.js", "window.ELECTION_DATA = { parties: [] };");
  write(root, "issue-data.js", "window.ISSUE_GUIDE = { issues: [] };");
  write(root, "app.js", '"use strict"; const label = "מידע";');
  for (const name of OPTIONAL_FILES) write(root, name, "{}");
  for (const name of ASSET_FILES) write(root, name, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="M0 0h10v10H0z"/></svg>');
  return { root, owned, output: path.join(root, OUTPUT_DIRECTORY) };
}

test.after(() => {
  if (fs.existsSync(fixtureBase) && fs.readdirSync(fixtureBase).length === 0) fs.rmdirSync(fixtureBase);
});

function artifactFiles(directory, prefix = "") {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    assert.equal(entry.isSymbolicLink(), false);
    const relative = prefix + entry.name;
    return entry.isDirectory() ? artifactFiles(path.join(directory, entry.name), `${relative}/`) : [relative];
  }).sort();
}

function attributes(source) {
  const result = new Map();
  for (const match of source.matchAll(/([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
    result.set(match[1].toLowerCase(), match[2] ?? match[3] ?? match[4] ?? "");
  }
  return result;
}

function relativeResource(value, files) {
  if (!value || value.startsWith("#") || /^data:image\/(?:svg\+xml|png|webp);/i.test(value)) return;
  assert.ok(!/^(?:[a-z][a-z\d+.-]*:|\/|\\)/i.test(value), "Runtime resources must be local relative URLs.");
  const pathname = decodeURIComponent(value.split(/[?#]/, 1)[0]).replace(/^\.\//, "");
  if (!pathname) return;
  assert.ok(!pathname.includes("\\") && !pathname.split("/").includes(".."), "Resource must stay inside the artifact.");
  assert.ok(files.has(pathname), `Resource is not an allowlisted artifact file: ${pathname}`);
}

function checkCss(source, files) {
  const css = source.replace(/\/\*[\s\S]*?\*\//g, "");
  assert.doesNotMatch(css, /@import\b/i, "No imported stylesheet dependency.");
  for (const match of css.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)\s]*))\s*\)/gi)) {
    relativeResource(match[1] ?? match[2] ?? match[3], files);
  }
}

function checkResources(files) {
  const html = files.get("index.html").toString("utf8").replace(/<!--[\s\S]*?-->/g, "");
  const scripts = [];
  let stylesheet = false;
  for (const tag of html.matchAll(/<([a-z][\w:-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)) {
    const name = tag[1].toLowerCase();
    const attrs = attributes(tag[2]);
    assert.equal(attrs.has("ping"), false, "Link ping is a tracking request.");
    assert.notEqual(name, "base", "No base URL may override offline or project-relative resources.");
    assert.ok(!["iframe", "object", "embed"].includes(name), "No embedded external execution context.");
    if (name === "script") {
      assert.ok(attrs.has("src"), "Executable inline scripts are not part of the release contract.");
      assert.notEqual(attrs.get("type"), "module", "Classic scripts must also work from file://.");
      assert.equal(attrs.has("async"), false, "The data globals must load before the app.");
      relativeResource(attrs.get("src"), files);
      scripts.push(attrs.get("src").replace(/^\.\//, ""));
    }
    if (name === "link") {
      const relationships = (attrs.get("rel") || "").toLowerCase().split(/\s+/);
      assert.ok(!relationships.some(rel => ["preconnect", "dns-prefetch"].includes(rel)), "No speculative external requests.");
      if (relationships.some(rel => ["stylesheet", "icon", "apple-touch-icon", "mask-icon", "preload", "modulepreload", "prefetch", "manifest"].includes(rel))) {
        relativeResource(attrs.get("href"), files);
      }
      if (relationships.includes("stylesheet") && attrs.get("href")?.replace(/^\.\//, "") === "styles.css") stylesheet = true;
    }
    if (name === "meta") assert.notEqual(attrs.get("http-equiv")?.toLowerCase(), "refresh", "No automatic navigation.");
    for (const attribute of ["src", "poster"]) {
      if (name !== "script" && attrs.has(attribute)) relativeResource(attrs.get(attribute), files);
    }
    if (attrs.has("srcset")) {
      for (const candidate of attrs.get("srcset").split(",")) relativeResource(candidate.trim().split(/\s+/)[0], files);
    }
    if (attrs.has("style")) checkCss(attrs.get("style"), files);
    if (name === "form" && attrs.has("action")) assert.ok(!attrs.get("action") || attrs.get("action").startsWith("#"), "No frontend submission endpoint.");
    if (name === "a" && attrs.has("href") && !/^(?:https?:|mailto:|tel:|#)/i.test(attrs.get("href"))) relativeResource(attrs.get("href"), files);
    for (const [attribute, value] of attrs) {
      if (/^on[a-z]+$/.test(attribute)) assertStatelessCode(value);
    }
  }
  assert.deepEqual(scripts, ["data.js", "issue-data.js", "app.js"], "Only the three ordered release scripts may load; no legacy quiz.");
  assert.ok(stylesheet, "The local stylesheet must be linked.");
  for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) checkCss(match[1], files);
  checkCss(files.get("styles.css").toString("utf8"), files);
  for (const name of ASSET_FILES) {
    const svg = files.get(name).toString("utf8");
    assert.match(svg, /<svg\b/i);
    assert.doesNotMatch(svg, /<(?:script|foreignObject)\b|<!ENTITY\b|\bon[a-z]+\s*=/i, "Original SVGs must not execute scripts.");
    for (const match of svg.matchAll(/(?:href|src)\s*=\s*["']([^"']+)["']/gi)) relativeResource(match[1], files);
    checkCss(svg, files);
  }
}

function codeTokens(source) {
  const tokens = [];
  let index = 0;
  function quoted(quote) {
    let value = "";
    index++;
    while (index < source.length && source[index] !== quote) {
      if (source[index] === "\\") {
        index++;
        if (source[index] === "u" && /^[a-f\d]{4}$/i.test(source.slice(index + 1, index + 5))) {
          value += String.fromCharCode(parseInt(source.slice(index + 1, index + 5), 16));
          index += 5;
          continue;
        }
        if (source[index] === "x" && /^[a-f\d]{2}$/i.test(source.slice(index + 1, index + 3))) {
          value += String.fromCharCode(parseInt(source.slice(index + 1, index + 3), 16));
          index += 3;
          continue;
        }
      }
      value += source[index++] || "";
    }
    index++;
    tokens.push({ type: "string", value });
  }
  function scan(inTemplateExpression = false) {
    let braceDepth = 0;
    while (index < source.length) {
      const character = source[index];
      if (/\s/.test(character)) { index++; continue; }
      if (source.startsWith("//", index)) {
        index = source.indexOf("\n", index + 2);
        if (index === -1) index = source.length;
        continue;
      }
      if (source.startsWith("/*", index)) {
        const end = source.indexOf("*/", index + 2);
        index = end === -1 ? source.length : end + 2;
        continue;
      }
      if (character === "'" || character === '"') { quoted(character); continue; }
      if (character === "`") {
        index++;
        while (index < source.length && source[index] !== "`") {
          if (source[index] === "\\") { index += 2; continue; }
          if (source.startsWith("${", index)) { index += 2; scan(true); continue; }
          index++;
        }
        index++;
        continue;
      }
      if (character === "}" && inTemplateExpression && braceDepth === 0) { index++; return; }
      if (character === "{") braceDepth++;
      if (character === "}") braceDepth--;
      const previous = tokens.at(-1)?.value;
      if (character === "/" && (!previous || ["(", "=", ":", ",", "[", "!", "&&", "||", "return", "=>", "{", ";"].includes(previous))) {
        index++;
        let inClass = false;
        while (index < source.length) {
          if (source[index] === "\\") { index += 2; continue; }
          if (source[index] === "[") inClass = true;
          if (source[index] === "]") inClass = false;
          if (source[index++] === "/" && !inClass) break;
        }
        while (/[a-z]/i.test(source[index] || "")) index++;
        tokens.push({ type: "literal", value: "<regexp>" });
        continue;
      }
      const identifier = source.slice(index).match(/^[a-z_$][\w$]*/i);
      if (identifier) {
        tokens.push({ type: "identifier", value: identifier[0] });
        index += identifier[0].length;
      } else {
        const operator = source.slice(index).match(/^(?:\?\.|=>|&&|\|\|)/)?.[0] || character;
        tokens.push({ type: "punctuation", value: operator });
        index += operator.length;
      }
    }
  }
  scan();
  return tokens;
}

function assertStatelessCode(source) {
  // Check executable API references, not political/source text, comments, or regex literals.
  const tokens = codeTokens(source);
  const forbidden = new Set([
    "localStorage", "sessionStorage", "indexedDB", "cookieStore", "caches",
    "fetch", "XMLHttpRequest", "WebSocket", "EventSource", "Worker", "SharedWorker",
    "importScripts", "sendBeacon", "serviceWorker", "gtag", "ga", "fbq", "clarity"
  ]);
  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const previous = tokens[index - 1]?.value;
    const next = tokens[index + 1]?.value;
    const owner = tokens[index - 2];
    const computed = token.type === "string" && previous === "[" && next === "]" &&
      (owner?.value === "]" || owner?.value === ")" ||
       (owner?.type === "identifier" && !["return", "throw", "yield", "await", "new", "case"].includes(owner.value)));
    const reference = (token.type === "identifier" && next !== ":") || computed;
    if (reference && forbidden.has(token.value)) assert.fail(`Frontend capability is forbidden: ${token.value}`);
    if (reference && token.value === "cookie" &&
        (previous === "." || previous === "?." || computed) &&
        (owner?.value === "document" || owner?.value === "]")) {
      assert.fail("Cookie access is forbidden.");
    }
    if (token.type === "identifier" && token.value === "import" && next === "(") assert.fail("Dynamic script imports are forbidden.");
    if (token.type === "string" && /^(?:https?:)?\/\//i.test(token.value) &&
        tokens[index - 1]?.value === "=" && ["src", "href", "srcset"].includes(tokens[index - 2]?.value)) {
      assert.fail("Dynamic external resource assignment is forbidden.");
    }
  }
}

function assertFrontend(files) {
  for (const name of REQUIRED_FILES) assert.ok(files.has(name), `Required release file: ${name}`);
  assert.ok([...files.keys()].every(name => ALLOWED_FILES.includes(name)));
  checkResources(files);
  for (const name of ["app.js", "data.js", "issue-data.js"]) {
    const source = files.get(name).toString("utf8");
    new vm.Script(source, { filename: name });
    assertStatelessCode(source);
    for (const token of codeTokens(source)) {
      if (token.type === "string" && /^(?:\.\/|\/)?assets\/[^\s]+\.svg(?:[?#].*)?$/.test(token.value)) {
        relativeResource(token.value, files);
      }
    }
  }
  for (const [name, global] of [["data.js", "ELECTION_DATA"], ["issue-data.js", "ISSUE_GUIDE"]]) {
    const context = Object.create(null);
    context.window = Object.create(null);
    vm.runInNewContext(files.get(name).toString("utf8"), context, {
      filename: name, timeout: 1000, contextCodeGeneration: { strings: false, wasm: false }
    });
    assert.ok(context.window[global] && typeof context.window[global] === "object", `Missing window.${global}`);
  }
  for (const name of OPTIONAL_FILES) {
    if (files.has(name)) JSON.parse(files.get(name).toString("utf8"));
  }
}

test("artifact contains only the explicit release allowlist, never developer or browser baggage", t => {
  const { root, output } = fixture(t);
  for (const name of [
    "quiz-data.js", "policy_data_part1.js", "assemble_research.js", "README.md",
    "tests/private.cjs", ".squad/state.json", ".copilot/state.json", ".mcp.json",
    ".git/config", "tali-browser-state/Default/History", "tali-integration-browser/Default/Cookies",
    "assets/not-reviewed.svg", "assets/nested/not-reviewed.svg", "data/not-reviewed.json"
  ]) write(root, name, "fixture only");
  const result = buildSite({ root });
  assert.deepEqual(result.files.sort(), [...ALLOWED_FILES].sort());
  assert.deepEqual(artifactFiles(output), [...ALLOWED_FILES].sort());
  for (const name of result.files) assert.deepEqual(fs.readFileSync(path.join(output, ...name.split("/"))), fs.readFileSync(path.join(root, ...name.split("/"))));
  assertFrontend(readReleaseFiles(root));
});

test("optional JSON is genuinely optional and known stale output is removed on rebuild", t => {
  const { root, output } = fixture(t);
  buildSite({ root });
  for (const name of OPTIONAL_FILES) fs.unlinkSync(path.join(root, ...name.split("/")));
  buildSite({ root });
  assert.deepEqual(artifactFiles(output), [...REQUIRED_FILES, ...ASSET_FILES].sort());
});

test("missing release files fail without placeholders or deleting an existing artifact", t => {
  for (const name of REQUIRED_FILES) {
    const { root, output } = fixture(t);
    buildSite({ root });
    const original = fs.readFileSync(path.join(output, "index.html"));
    fs.unlinkSync(path.join(root, name));
    assert.throws(() => buildSite({ root }), /Missing required release file/);
    assert.deepEqual(fs.readFileSync(path.join(output, "index.html")), original);
    assert.equal(fs.existsSync(path.join(root, name)), false);
  }
});

test("arbitrary, root, parent and nested output targets are rejected", t => {
  const { root } = fixture(t);
  for (const output of [root, path.dirname(root), path.join(root, "other"), path.join(root, OUTPUT_DIRECTORY, "nested")]) {
    assert.throws(() => buildSite({ root, output }), /only permitted build target/);
  }
  assert.equal(fs.existsSync(path.join(root, OUTPUT_DIRECTORY)), false);
});

test("unexpected files or nested directories in output are preserved, not broadly deleted", t => {
  const { root, output } = fixture(t);
  buildSite({ root });
  write(output, "do-not-delete.txt", "preserve");
  assert.throws(() => buildSite({ root }), /Unexpected entry/);
  assert.equal(fs.readFileSync(path.join(output, "do-not-delete.txt"), "utf8"), "preserve");
  fs.unlinkSync(path.join(output, "do-not-delete.txt"));
  write(output, "data/nested/browser-state.txt", "preserve");
  assert.throws(() => buildSite({ root }), /Unexpected entry/);
  assert.equal(fs.readFileSync(path.join(output, "data", "nested", "browser-state.txt"), "utf8"), "preserve");
});

test("linked source directories and linked output are rejected without touching their targets", t => {
  const { root, owned, output } = fixture(t);
  const outside = path.join(owned, "outside");
  fs.mkdirSync(outside);
  write(outside, "research.json", "{}");
  for (const name of OPTIONAL_FILES) fs.unlinkSync(path.join(root, ...name.split("/")));
  fs.rmdirSync(path.join(root, "data"));
  fs.symlinkSync(outside, path.join(root, "data"), process.platform === "win32" ? "junction" : "dir");
  assert.throws(() => readReleaseFiles(root), /Linked|Outside/);
  fs.unlinkSync(path.join(root, "data"));
  fs.symlinkSync(outside, output, process.platform === "win32" ? "junction" : "dir");
  assert.throws(() => buildSite({ root }), /Linked|Outside/);
  assert.equal(fs.readFileSync(path.join(outside, "research.json"), "utf8"), "{}");
});

test("hardlinked source and output files cannot import or alter files outside the site root", t => {
  const { root, owned, output } = fixture(t);
  const outside = path.join(owned, "outside.js");
  fs.writeFileSync(outside, "outside fixture");
  fs.unlinkSync(path.join(root, "app.js"));
  fs.linkSync(outside, path.join(root, "app.js"));
  assert.throws(() => buildSite({ root }), /Linked/);
  fs.unlinkSync(path.join(root, "app.js"));
  write(root, "app.js", '"use strict";');
  buildSite({ root });
  fs.unlinkSync(path.join(output, "app.js"));
  fs.linkSync(outside, path.join(output, "app.js"));
  assert.throws(() => buildSite({ root }), /Linked/);
  assert.equal(fs.readFileSync(outside, "utf8"), "outside fixture");
});

test("relative resources, ordered data globals and optional original SVG links are valid", t => {
  const { root } = fixture(t);
  assertFrontend(readReleaseFiles(root));
  const initialHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
  write(root, "index.html", initialHtml.replace("</head>", '<link rel="canonical" href="https://example.org/site/"></head>'));
  assertFrontend(readReleaseFiles(root));
  if (ASSET_FILES.length) {
    const html = fs.readFileSync(path.join(root, "index.html"), "utf8").replace("</body>", `<img src="${ASSET_FILES[0]}" alt=""></body>`);
    write(root, "index.html", html);
    assertFrontend(readReleaseFiles(root));
  }
  write(root, "issue-data.js", "window.WRONG_GLOBAL = {};");
  assert.throws(() => assertFrontend(readReleaseFiles(root)), /Missing window.ISSUE_GUIDE/);
});

test("absolute, external, missing, legacy and module frontend resources block release", t => {
  const { root } = fixture(t);
  const original = fs.readFileSync(path.join(root, "index.html"), "utf8");
  for (const replacement of ["/styles.css", "https://example.org/styles.css", "../styles.css", "missing.css"]) {
    write(root, "index.html", original.replace('href="styles.css"', `href="${replacement}"`));
    assert.throws(() => assertFrontend(readReleaseFiles(root)));
  }
  write(root, "index.html", original.replace("issue-data.js", "quiz-data.js"));
  assert.throws(() => assertFrontend(readReleaseFiles(root)));
  write(root, "index.html", original.replace("</head>", '<base href="/"></head>'));
  assert.throws(() => assertFrontend(readReleaseFiles(root)), /base URL/);
  write(root, "index.html", original.replace("</head>", '<meta http-equiv="refresh" content="0;url=https://example.org/"></head>'));
  assert.throws(() => assertFrontend(readReleaseFiles(root)), /automatic navigation/);
  write(root, "index.html", original.replace('<script defer src="app.js"', '<script type="module" src="app.js"'));
  assert.throws(() => assertFrontend(readReleaseFiles(root)), /file:\/\//);
  write(root, "index.html", original);
  write(root, "styles.css", 'body { background: url("https://example.org/tracker.png"); }');
  assert.throws(() => assertFrontend(readReleaseFiles(root)), /local relative URLs/);
});

test("storage, cookies, network APIs and analytics calls are blocked as executable capabilities", () => {
  for (const source of [
    'localStorage.setItem("choice", "x");', 'window["sessionStorage"].getItem("choice");',
    'globalThis["local\\u0053torage"];', 'indexedDB.open("choices");',
    'document.cookie = "choice=x";', 'document["cookie"];', 'cookieStore.get("choice");',
    'caches.open("responses");', 'navigator.serviceWorker.register("worker.js");',
    'fetch("https://example.org/collect");', 'new XMLHttpRequest();',
    'navigator.sendBeacon("https://example.org/collect");', 'new WebSocket("wss://example.org");',
    'new EventSource("https://example.org");', 'gtag("event", "choice");',
    'const request = window.fetch;', 'const text = `value: ${window.localStorage.getItem("x")}`;',
    'import("https://example.org/script.js");', 'image.src = "https://example.org/tracker.png";'
  ]) assert.throws(() => assertStatelessCode(source));
});

test("citations, privacy copy, comments, regex literals and user-action clipboard are not telemetry", () => {
  assertStatelessCode('const privacy = "No localStorage, cookies or fetch are used."; ' +
    'const evidence = "https://example.org/research"; // localStorage.fetch\\n\n' +
    'const words = ["localStorage", "cookie", "fetch"]; const source = { cookie: "policy text" }; source.cookie; ' +
    'const names = /localStorage|fetch|cookie/; const label = `cookies and fetch`; ' +
    'button.addEventListener("click", () => navigator.clipboard.writeText(evidence));');
});

test("Pages workflow is manual, main-only, immutable-pinned and uploads only the staging directory", () => {
  const workflow = fs.readFileSync(path.join(ROOT, ".github", "workflows", "pages.yml"), "utf8");
  assert.match(workflow, /workflow_dispatch:/);
  assert.doesNotMatch(workflow, /^\s+(?:push|pull_request|schedule):/m);
  assert.match(workflow, /publish_approved:[\s\S]*default: false/);
  assert.match(workflow, /github\.ref == 'refs\/heads\/main'/);
  assert.match(workflow, /if:.*inputs\.publish_approved/);
  assert.match(workflow, /persist-credentials: false/);
  assert.match(workflow, /SITE_RELEASE_CHECK: "1"/);
  assert.match(workflow, /node --test tests\/deployment\.test\.cjs/);
  assert.match(workflow, /node scripts\/build-site\.cjs/);
  assert.match(workflow, /path: \.pages-artifact/);
  assert.match(workflow, /pages\.build_type !== "workflow"/);
  assert.match(workflow, /enablement: false/);
  const actions = [...workflow.matchAll(/uses:\s*([^\s#]+)/g)].map(match => match[1]);
  assert.equal(actions.length, 5);
  for (const action of actions) assert.match(action, /^actions\/[\w-]+@[a-f0-9]{40}$/);
  assert.match(workflow, /build:[\s\S]*?permissions:\s*\n\s+contents: read/);
  assert.match(workflow, /deploy:[\s\S]*?permissions:\s*\n\s+pages: write\s*\n\s+id-token: write/);
});

test("integrated source satisfies the stateless release contract", {
  skip: process.env.SITE_RELEASE_CHECK !== "1" && "Set SITE_RELEASE_CHECK=1 after factual/frontend integration."
}, () => {
  assertFrontend(readReleaseFiles(ROOT));
});
