"use strict";

const research = require("./data/research.json");
const ids = new Set(["otzma_yehudit", "yisrael_beitenu", "shas", "utj", "blue_white"]);
module.exports = Object.fromEntries(research.parties.filter(p => ids.has(p.id)).map(p => [
  p.id,
  Object.fromEntries(Object.entries(p.topicPositions).map(([topic, bucket]) => [
    topic,
    {
      position: bucket.positions[0] || null,
      promise: bucket.promises[0] || null,
      record: bucket.records[0] || null,
      context: bucket.contextualReporting[0] || null,
      gaps: bucket.gaps
    }
  ]))
]));
