"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { validateResearch } = require("./app.js");

function serializeResearch() {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "research.json"), "utf8").replace(/^\uFEFF/, ""));
  const checked = validateResearch(data);
  if (!checked.valid) throw new Error(checked.problems.join("\n"));
  const json = JSON.stringify(data, null, 2).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  fs.writeFileSync(path.join(__dirname, "data.js"), `"use strict";\nwindow.ELECTION_DATA = ${json};\n`, "utf8");
  return data;
}

if (require.main === module) {
  const data = serializeResearch();
  console.log(`Serialized ${data.parties.length} political profiles without changing the research object.`);
}

module.exports = { serializeResearch };
