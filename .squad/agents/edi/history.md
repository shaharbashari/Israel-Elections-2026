# EDI — History

## Project Context

- Israel-Elections-2026, requested by @shaharbashari: a nonpartisan Hebrew RTL static election-information site.
- Dependency-free HTML/CSS/JavaScript; research evidence feeds browser data, without personal political-information persistence.

## 2026-10-07T23:43:56.989+03:00 — Team Setup

- Own schema, stable-ID/reference checks, date/status validation, six-topic completeness, and integration integrity under the session contract.
- Liara owns `data\research.json`; Tali owns generated `data.js`. Supply corrections and transformation guidance rather than overwrite their artifacts.
- Verify browser/research fidelity and visible missing/uncertain evidence; never compute ideology, suitability, candidacy, or coalitions.
- Keep validation scripts/reports in session files, using existing runtimes and minimal tooling.
- Use exactly `gemini-3.8-flash`, without fallback; local state and no git operations. No website or research artifact is created in setup.
