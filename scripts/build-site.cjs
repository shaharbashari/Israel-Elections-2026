"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIRECTORY = ".pages-artifact";
const REQUIRED_FILES = Object.freeze([
  "index.html",
  "styles.css",
  "data.js",
  "issue-data.js",
  "app.js"
]);
const OPTIONAL_FILES = Object.freeze([
  "data/research.json",
  "data/issue-guide.json",
  "data/fact-check-report.json"
]);

// Add only reviewed original SVG filenames here, never a directory glob.
const ASSET_FILES = Object.freeze([
  "assets/mark.svg",
  "assets/reading-room.svg",
  "assets/topic-civic.svg",
  "assets/topic-community.svg",
  "assets/topic-economy.svg",
  "assets/topic-environment.svg",
  "assets/topic-society.svg",
  "assets/topic-world.svg"
]);
const ALLOWED_FILES = Object.freeze([...REQUIRED_FILES, ...OPTIONAL_FILES, ...ASSET_FILES]);
const ALLOWED_DIRECTORIES = Object.freeze(["assets", "data"]);

function samePath(left, right) {
  const normalize = value => process.platform === "win32" ? value.toLowerCase() : value;
  return normalize(path.resolve(left)) === normalize(path.resolve(right));
}

function checkedRoot(root, checkedPaths) {
  const resolved = path.resolve(root);
  const stat = fs.lstatSync(resolved);
  if (stat.isSymbolicLink() || !stat.isDirectory() || !samePath(fs.realpathSync.native(resolved), resolved)) {
    throw new Error("The site root must be a real, non-linked directory.");
  }
  checkedPaths.add(resolved);
  return resolved;
}

function checkedEntry(root, relative, checkedPaths, { optional = false, directory = false } = {}) {
  const parts = relative.split("/");
  if (path.isAbsolute(relative) || relative.includes("\\") ||
      parts.some(part => !part || part === "." || part === "..")) {
    throw new Error("Unsafe release path.");
  }
  let current = root;
  for (let index = 0; index < parts.length; index++) {
    current = path.join(current, parts[index]);
    let stat;
    try {
      stat = fs.lstatSync(current);
    } catch (error) {
      if (error.code !== "ENOENT") throw new Error(`Cannot inspect release path: ${relative}`);
      if (optional) return null;
      throw new Error(`Missing required release file: ${relative}`);
    }
    const isDirectory = index < parts.length - 1 || directory;
    if (stat.isSymbolicLink() || (isDirectory ? !stat.isDirectory() : !stat.isFile()) ||
        (!isDirectory && stat.nlink !== 1)) {
      throw new Error(`Linked or non-regular release path rejected: ${relative}`);
    }
    const real = fs.realpathSync.native(current);
    const fromRoot = path.relative(root, real);
    if (!samePath(real, current) || fromRoot === ".." || fromRoot.startsWith(`..${path.sep}`) || path.isAbsolute(fromRoot)) {
      throw new Error(`Outside release path rejected: ${relative}`);
    }
    checkedPaths.add(current);
  }
  return current;
}

function rejectWindowsReparsePoints(checkedPaths) {
  if (process.platform !== "win32" || checkedPaths.size === 0) return;
  // lstat handles symlinks/junctions; Windows also has other reparse-point types.
  const result = spawnSync("powershell.exe", [
    "-NoProfile", "-NonInteractive", "-Command",
    "$ErrorActionPreference = 'Stop'; try { $paths = [Console]::In.ReadToEnd() | ConvertFrom-Json; " +
    "foreach ($entry in $paths) { $item = Get-Item -LiteralPath $entry -Force; " +
    "if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) { exit 2 } }; exit 0 } catch { exit 3 }"
  ], {
    input: JSON.stringify([...checkedPaths]),
    encoding: "utf8",
    windowsHide: true,
    timeout: 30000
  });
  if (result.status !== 0) throw new Error("Release paths must be inspectable and contain no Windows reparse points.");
}

function readReleaseFiles(root = ROOT) {
  const checkedPaths = new Set();
  root = checkedRoot(root, checkedPaths);
  const selected = [];
  for (const relative of ALLOWED_FILES) {
    if (relative.startsWith("assets/") && !/^assets\/[a-z0-9][a-z0-9-]*\.svg$/.test(relative)) {
      throw new Error("Only explicitly named, direct original SVG assets are allowed.");
    }
    const filename = checkedEntry(root, relative, checkedPaths, { optional: OPTIONAL_FILES.includes(relative) });
    if (filename) selected.push([relative, filename]);
  }
  rejectWindowsReparsePoints(checkedPaths);
  return new Map(selected.map(([relative, filename]) => [relative, fs.readFileSync(filename)]));
}

function planOutputCleanup(root, output, checkedPaths) {
  if (!samePath(output, path.join(root, OUTPUT_DIRECTORY))) {
    throw new Error(`The only permitted build target is ${OUTPUT_DIRECTORY} inside the site root.`);
  }
  const existing = checkedEntry(root, OUTPUT_DIRECTORY, checkedPaths, { optional: true, directory: true });
  if (!existing) return { files: [], directories: [] };
  const files = [];
  const directories = [];
  for (const entry of fs.readdirSync(output, { withFileTypes: true })) {
    if (ALLOWED_DIRECTORIES.includes(entry.name)) {
      const relative = `${OUTPUT_DIRECTORY}/${entry.name}`;
      const directory = checkedEntry(root, relative, checkedPaths, { directory: true });
      for (const child of fs.readdirSync(directory, { withFileTypes: true })) {
        const releasePath = `${entry.name}/${child.name}`;
        if (!ALLOWED_FILES.includes(releasePath)) throw new Error("Unexpected entry in Pages output; refusing cleanup.");
        files.push(checkedEntry(root, `${OUTPUT_DIRECTORY}/${releasePath}`, checkedPaths));
      }
      directories.push(directory);
    } else {
      if (!ALLOWED_FILES.includes(entry.name)) throw new Error("Unexpected entry in Pages output; refusing cleanup.");
      files.push(checkedEntry(root, `${OUTPUT_DIRECTORY}/${entry.name}`, checkedPaths));
    }
  }
  rejectWindowsReparsePoints(checkedPaths);
  return { files, directories };
}

function buildSite({ root = ROOT, output } = {}) {
  const checkedPaths = new Set();
  root = checkedRoot(root, checkedPaths);
  output = path.resolve(output || path.join(root, OUTPUT_DIRECTORY));
  if (!samePath(output, path.join(root, OUTPUT_DIRECTORY))) {
    throw new Error(`The only permitted build target is ${OUTPUT_DIRECTORY} inside the site root.`);
  }
  const files = readReleaseFiles(root);
  const cleanup = planOutputCleanup(root, output, checkedPaths);
  // Never recursively delete: only these validated allowlisted files and two empty child directories.
  for (const filename of cleanup.files) fs.unlinkSync(filename);
  for (const directory of cleanup.directories) fs.rmdirSync(directory);
  if (!fs.existsSync(output)) fs.mkdirSync(output);
  for (const [relative, bytes] of files) {
    const destination = path.join(output, ...relative.split("/"));
    const parent = path.dirname(destination);
    if (parent !== output && !fs.existsSync(parent)) fs.mkdirSync(parent);
    fs.writeFileSync(destination, bytes, { flag: "wx" });
  }
  return { output, files: [...files.keys()] };
}

if (require.main === module) {
  try {
    if (process.argv.length !== 2) throw new Error("This build accepts no command-line path overrides.");
    const result = buildSite();
    console.log(`Staged ${result.files.length} allowlisted files in ${OUTPUT_DIRECTORY}: ${result.files.join(", ")}`);
  } catch (error) {
    console.error(`Pages build refused: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = { ROOT, OUTPUT_DIRECTORY, REQUIRED_FILES, OPTIONAL_FILES, ASSET_FILES, ALLOWED_FILES, readReleaseFiles, buildSite };
