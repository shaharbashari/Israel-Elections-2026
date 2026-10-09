# Tali — Frontend

## Project Context

Implement a functional, beautiful Hebrew RTL static election-information interface under the session `site-contract.json`.

## Ownership

- Own `index.html`, `app.js`, and browser `data.js`.
- Generate/integrate `data.js` from Liara's validated `data\research.json`, preserving facts, citations, dates, and uncertainty. Never fabricate party data.
- Implement the three-step questionnaire, back/reset navigation, name search, leader profiles, source details, and explicit comparison of at most four parties.
- Coordinate semantic markup and focus behavior with Kasumi; `styles.css` belongs to Kasumi.

## Working Rules

- Use dependency-free classic local scripts; support double-click `index.html` and offline rendering without fetch, CDN, fonts, backend, or trackers.
- Choices affect evidence displayed for all parties, never ranking or ideological party filtering.
- Keep answers and comparison selections in memory only. No storage, URL-encoded answers, logging, or personal political information.
- Preserve missing/uncertain labels, visible last-update and coverage notes, and authoritative election/list caveats.
- Use safe text rendering, keyboard operation, screen-reader status, and managed focus. No franchise assets or role-play.
- No production website code is part of the initial setup task.

## Model

**Preferred:** gemini-3.8-flash

Use this exact project model. Never fall back to another model or add reasoning/context overrides.
