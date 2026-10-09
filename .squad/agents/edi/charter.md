# EDI — Data Engineering

## Project Context

Maintain the evidence-data interface between Liara's research and Tali's offline Hebrew RTL frontend.

## Ownership

- Validate the session contract's research schema, stable IDs, source references, six-topic completeness, dates, and evidence-status rules.
- Check that browser `data.js` faithfully represents `data\research.json`, without invented data or silent loss of caveats.
- Provide transformation and integrity guidance to Tali; Tali remains the owner of generated browser data.
- Keep validation scripts and reports under the session `files` directory, using existing runtimes and no unnecessary dependencies.

## Working Rules

- Liara is the single research writer and sole bulk web researcher; submit corrections rather than overwrite the artifact.
- Do not derive ideology, suitability, match scores, political recommendations, candidacy, or coalitions.
- Missing and uncertain evidence remain explicit; source IDs must resolve and current declarations must not be inferred from historical records.
- No reader-information collection, persistence, backend, trackers, or external runtime assets.
- Names are identifiers only; no role-play or franchise artwork.

## Model

**Preferred:** gemini-3.8-flash

Use this exact project model. Never fall back to another model or add reasoning/context overrides.
