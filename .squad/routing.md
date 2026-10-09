# Work Routing

How to decide who handles what.

## Routing Table

| Work Type | Route To | Examples |
|-----------|----------|----------|
| Architecture & final integration | Shepard | Static-site contract, ownership boundaries, scope and final review |
| Bulk public-source research | Liara | Official election information, platforms, balanced independent reporting; owns `data\research.json` |
| Evidence editing | Garrus | Source IDs, provenance, claim attribution and contradictory evidence |
| Leader profiles & public records | Miranda | Cited leader summaries, documented actions and candidacy caveats |
| Comparison methodology | Mordin | Common topic categories, declared versus historical evidence, uncertainty and gaps |
| Frontend & browser data | Tali | `index.html`, `app.js`, generated `data.js`, questionnaire and comparison interactions |
| Editorial design & accessibility | Kasumi | `styles.css`, Hebrew RTL layout, responsive design, restrained motion and focus styling |
| Data contract & integrity | EDI | Schema and reference validation, research-to-browser integration checks |
| Code review | Joker | Functional review, data-integrity checks and release acceptance |
| Testing | Joker | Offline, mobile, keyboard, questionnaire, comparison-limit and regression checks |
| Neutrality review | Samara | Universal unranked presentation, non-persuasive wording and privacy boundaries |
| Scope & priorities | Shepard | What to build next, trade-offs, decisions |
| Session logging | Scribe | Automatic — never needs routing |
| Work monitoring | Ralph | Track authorized work, dependencies and blockers; no speculative fan-out |
| RAI review | Rai | Content safety, bias checks, credential detection, ethical review |
| Verification | Fact Checker | Check specific claims and sources; advisory verification, not another bulk researcher |

## Issue Routing

| Label | Action | Who |
|-------|--------|-----|
| `squad` | Triage: analyze issue, assign `squad:{member}` label | Shepard |
| `squad:{name}` | Pick up issue and complete the work | Named member |

### How Issue Assignment Works

1. When a GitHub issue gets the `squad` label, **Shepard (Lead)** triages it — analyzing content, assigning the right `squad:{member}` label, and commenting with triage notes.
2. When a `squad:{member}` label is applied, that member picks up the issue in their next session.
3. Members can reassign by removing their label and adding another member's label.
4. The `squad` label is the "inbox" — untriaged issues waiting for Lead review.

## Rules

1. **Minimal delegation** — do direct work first; delegate only bounded, explicitly authorized work that needs separate context. This setup task spawns nobody.
2. **Scribe retains session logging ownership.** Automatic support routing does not override an explicit no-delegation request; when authorized, background logging never blocks.
3. **Quick facts → coordinator answers directly.** Don't spawn an agent for "what port does the server run on?"
4. **When two agents could handle it**, pick the one whose domain is the primary concern.
5. **"Team, ..." is not unbounded fan-out.** Choose the smallest authorized set of owners; do not launch an automatic ceremony or speculative participants.
6. **Align interfaces before domain work.** Use the session `site-contract.json`; research feeds the frontend through the agreed data artifact, with one writer per owned file.
7. **Issue-labeled work** — when a `squad:{member}` label is applied to an issue, route to that member. Shepard handles all `squad` (base label) triage.

## Reviewer Rejection Lockout

- Joker and Samara are Reviewers. Review verdicts are independent of implementation; an author cannot approve their own work.
- A Reviewer rejection, including a Rai Red verdict, locks the original author out of revisions to the rejected work. Shepard assigns a different qualified fix agent; the original author may supply context but must not implement the retry.
- The rejecting reviewer recommends remediation, may guide the fix agent, and re-reviews the revision. The reviewer must not become the replacement implementer or self-approve a fix.
- If no independent qualified fix agent is available, keep the work blocked and report the lockout; never silently return the revision to the original author.

## Project Execution Constraints

- Every authorized role uses exactly `gpt-6.1-sol`, with no model fallback or reasoning/context override.
- Use the local state backend and governed state tools when available. No git initialization, branch creation, commits, pushes, or backend git choreography in this non-repository workspace. GitHub issue routing above is dormant unless a repository is separately provided and authorized.
- Liara alone conducts bulk web research and writes `data\research.json`. Garrus, Miranda, Mordin, EDI, and Fact Checker supply bounded reviews or proposed corrections to that owner.
- Tali owns `index.html`, `app.js`, and browser `data.js`; Kasumi owns `styles.css`. Coordinate changes across those boundaries rather than edit another owner's file concurrently.
- Topic, evidence-type, and reading-depth choices change displayed evidence for all parties, never ordering or suitability. Name search and explicit comparison selections are the only user-controlled party subsets.
- Do not collect, persist, infer, or log personal political information or questionnaire answers. Confirm election dates and party lists from authoritative sources; keep unverified and missing evidence visible.
