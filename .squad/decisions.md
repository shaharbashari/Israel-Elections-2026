# Squad Decisions

## Active Decisions

### Populated-results layout: independent revision and re-review

- Recorded: 2026-10-07T23:43:56.989+03:00
- Merged inbox: joker-qa-visual-rejection.md
- Status: implemented; original styles.css blocker resolved by independent re-review with APPROVE_WITH_CAVEATS.

Joker's original artifact-specific NEEDS_REVISION verdict found 1,054.55px and 1,083.28px heading-to-action gaps in the populated 1440px results, while another first-row card had a 16px gap. Stretched flex-column party cards combined with the shared automatic action margin caused a substantive readability defect. The rejection applied to styles.css, not the other implementation or research artifacts.

The governed revision required a different owner from Kasumi, who was locked out of revising, advising, pairing, or co-authoring that artifact. Shepard independently applied the scoped .party-card > .party-actions margin reset without Kasumi's contribution. Canonical ordering, equal topics/categories, uncertainty/citations, mobile wrapping, focus/contrast, and reduced motion were to be preserved. Joker was to review independently, not implement or self-approve the fix.

The final completed-batch manifest records a new narrowly scoped synchronous Joker re-review because the runtime does not support write_agent follow-ups to the original synchronous reviewer. It returned APPROVE_WITH_CAVEATS: all 15 parties across 8 width/depth combinations, 240 gaps all 16px, zero overflow, all 5 non-CSS hashes unchanged, and focused compare/dialog/focus/contrast/reduced-motion regression checks passed. The 73 earlier passes are retained historical results, not claims of rerunning that suite. Screen-reader speech and comprehensive factual truth remain unverified. This resolution supersedes the original layout blocker, not those limitations.

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
