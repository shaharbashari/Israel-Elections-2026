# Squad Team

> Israel-Elections-2026

## Coordinator

| Name | Role | Notes |
|------|------|-------|
| Squad | Coordinator | Routes work, enforces handoffs and reviewer gates. |

## Members

| Name | Role | Charter | Status |
|------|------|---------|--------|
| Shepard | Lead | [charter](agents\shepard\charter.md) | Active |
| Liara | Research | [charter](agents\liara\charter.md) | Active |
| Garrus | Evidence editor | [charter](agents\garrus\charter.md) | Active |
| Miranda | Profiles | [charter](agents\miranda\charter.md) | Active |
| Mordin | Methodology | [charter](agents\mordin\charter.md) | Active |
| Tali | Frontend | [charter](agents\tali\charter.md) | Active |
| Kasumi | Design | [charter](agents\kasumi\charter.md) | Active |
| EDI | Data engineering | [charter](agents\edi\charter.md) | Active |
| Joker | QA / Reviewer | [charter](agents\joker\charter.md) | Active |
| Samara | Neutrality reviewer / Reviewer | [charter](agents\samara\charter.md) | Active |
| Scribe | Session logger | [charter](agents\scribe\charter.md) | Active |
| Ralph | Work monitor | [charter](agents\ralph\charter.md) | Active |
| Rai | RAI reviewer | [charter](agents\Rai\charter.md) | Active |
| Fact Checker | Verifier | [charter](agents\fact-checker\charter.md) | Active |

## Project Context

- **Project:** Israel-Elections-2026
- **Created:** 2026-10-07
- **Requested by:** @shaharbashari
- **Approved setup:** 2026-10-07T23:43:56.989+03:00
- **Focus:** A beautiful, responsive, animated Hebrew RTL static election-information website with universal, unranked, cited comparisons.
- **Questionnaire:** Topics to learn about, evidence type, and reading depth only. Never ask about political beliefs, demographics, values, or voting intention.
- **Boundaries:** No alignment scores, match percentages, party recommendations, ideological matching, persuasion, or persistence of questionnaire answers or personal political information.
- **Stack:** Prefer dependency-free `index.html`, `styles.css`, `app.js`, and `data.js`; double-click opening and offline rendering, without a backend, CDN, trackers, or API keys.
- **Evidence ownership:** Liara is the sole bulk web researcher and owner of `data\research.json`. Tali owns browser `data.js`, generated from that artifact. Editorial and methodology specialists submit corrections to the owner rather than overwrite shared data.
- **Election caveat:** `2026-10-27` is the user's unverified date claim, not an established election date. Confirm dates and lists with authoritative election sources; never guess candidacy or coalition membership.
- **Casting:** Ten specialists use the custom universe **Mass Effect**. Scribe, Ralph, Rai, and Fact Checker are standard support roles outside that ten and exempt from casting. Names are identifiers only; no role-play, spoilers, or franchise artwork.
- **Model:** `gemini-3.8-flash` for every role per user instruction. No alternative-model fallback and no reasoning or context overrides.
- **Workspace:** Local state backend, version 1; this directory is not a git repository. Do not initialize git, create branches, commit, or push.
- **Implementation contract:** `C:\Users\shaha\.copilot\session-state\bced9684-8c66-4cdb-af07-b7bc33a94630\files\site-contract.json`.
- **Current phase:** Website implemented and independently approved with caveats. Open `index.html` locally; all included content and interactions work without a server.
- **Research snapshot:** 15 organizations/formations, 11 public profiles, and 40 source URL records; 25 sources support nonmissing evidence. The cutoff is 2026-10-07. Coverage is curated, not exhaustive, and the election date, official lists, and candidacies remain unverified.
- **Review boundary:** Fact Checker performed bounded claim verification, not certification of every fact. Joker independently checked the populated interface. A rejected CSS spacing defect was revised by Shepard without Kasumi's participation and independently re-approved.
