"use strict";

const { serializeResearch, serializeIssueGuide, serializeArtifacts } = require("./assemble_research.js");

if (require.main === module) {
  serializeArtifacts();
  console.log("Serialized canonical research and issue guide; no facts, ratings or promises generated.");
}

module.exports = { serializeResearch, serializeIssueGuide, serializeArtifacts };
