"use strict";

const { serializeResearch } = require("./assemble_research.js");

if (require.main === module) {
  serializeResearch();
  console.log("Legacy enrichment command: serialized the canonical research only; no facts or promises generated.");
}

module.exports = { serializeResearch };
