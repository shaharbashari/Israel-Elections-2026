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
- **Stack:** Dependency-free `index.html`, `styles.css`, `app.js`, `data.js`, `issue-data.js`, and local original assets; double-click opening and offline rendering, without a backend, remote runtime assets, trackers, or API keys.
- **Evidence ownership:** Liara is the sole bulk web researcher and owns the canonical research, neutral issue guide, public audit report, and their exact browser serializations. Tali owns the interface and its tests; EDI owns the allowlisted release pipeline.
- **Election caveat:** `2026-10-27` is the user's unverified date claim, not an established election date. Confirm dates and lists with authoritative election sources; never guess candidacy or coalition membership.
- **Casting:** Ten specialists use the custom universe **Mass Effect**. Scribe, Ralph, Rai, and Fact Checker are standard support roles outside that ten and exempt from casting. Names are identifiers only; no role-play, spoilers, or franchise artwork.
- **Model:** The current user authorizes `gpt-6-astra` or `gpt-6.1-sol` for subtasks. Default: `gpt-6-astra`. No fallback to other models or unsolicited reasoning/context overrides.
- **Workspace:** Local state backend, version 1; Git repository `shaharbashari/Israel-Elections-2026`, branch `main`. Use explicit-file staging and normal pushes; never put credentials in URLs, force-push, or rewrite history without separate authorization.
- **Live delivery:** This project's requested changes must be published to and verified at `https://shaharbashari.github.io/Israel-Elections-2026/`, not left only in local files. Publish an explicit allowlist of website assets, never agent state, browser profiles, or developer tools.
- **Implementation contract:** `C:\Users\shaha\.copilot\session-state\bced9684-8c66-4cdb-af07-b7bc33a94630\files\site-contract.json`.
- **Current phase:** Re-auditing the full current ballot and every retained factual claim while rebuilding the premium Hebrew interface. Do not treat previous review results as approval of the current changes.
- **Research boundary:** The previous snapshot covered 14 political groupings, not an exhaustive current ballot. Establish current list participation, leaders, letters, and evidence from checked sources; never infer official approval or transfer predecessor policies to a new alliance.
- **Review boundary:** Structural validation and successful browser tests are not factual verification. All unsupported claims must be removed or visibly qualified. Historical browser profiles were removed from the latest tree but remain in old commits; this release does not authorize or claim a history purge.
