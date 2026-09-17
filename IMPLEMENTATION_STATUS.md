# Implementation status

Updated September 16, 2026. The owner requested a complete robotics map from high school foundations through master’s-level study, expanding the original introductory release. Decision history is in WEBSITE_INTENT.md.

## Delivered

- 11 subject directories and 62 developed topics covering mathematics and physics, programming, mechanical design, electronics, control, perception, planning, learning, human–robot systems, platforms and research.
- Six-stage interactive learning journey, from high school preparation through graduate work; each stage has an integration milestone and the full curriculum includes readiness criteria.
- Explicit topic prerequisites, learning outcomes and suggested practical exercises. Prerequisites are navigable in the journey and on topic pages.
- Six example specialization tracks. Specialist electives and graduate practice are distinguished from the shared core; thesis and professional systems-project pathways are explained.
- 53 shared references, with free learning material, source attribution and assumed knowledge. University catalogs and primary learning sources inform the editorial synthesis; it is not an accredited degree checklist.
- Expanded React Flow subject graph with pan, zoom, reset, keyboard controls, subject jumping and topic previews. ELK overview layouts are precomputed; expansion layouts are computed on demand with stale-response protection.
- `/curriculum` now publishes the full chronological map and works without JavaScript. The earlier 31-course dataset remains a separate draft.
- Existing four build guides and project-readiness labels preserved. The beginner lesson remains hidden; `/resources` redirects to the explorer.
- 81 published content routes. Production preview runs at http://localhost:3102. No deployment performed.

## Verification

- ESLint and production build, including TypeScript: passed.
- Nine Node tests: passed. Checks cover reference integrity, practical content, six-stage coverage, prerequisite ordering and cycles, and the preserved simulator.
- Map geometry: desktop and portrait overviews, every individual subject expansion, a mixed expansion and all subjects expanded; no overlapping nodes or routes through unrelated nodes.
- Production Chromium suite: all 81 published content routes, all 11 keyboard subject expansions, selection, reset, prerequisite navigation, resource disclosure, unknown/hidden routes and no-JavaScript curriculum access passed.
- Responsive browser checks at 320, 390, 768 and 1440 pixels: no horizontal page overflow or page errors. Desktop and phone screenshots visually inspected.
- A Next.js development-mode Performance timing error appeared during the first browser run; it did not occur in the final production run.
- `git diff --check`: passed. No project dependencies added; browser and formatting tools were installed in temporary directories for verification.

## Maintenance

See README.md for content editing, layout generation and repeatable checks. Source URLs are external and may change. Exercises are suggested activities, and no physical build was independently validated during this implementation.

## Visual refinement for non-technical visitors

- Open stage timeline and subject lists with generous spacing, larger text, soft colors and simple icons.
- Everyday introductions and a more welcoming homepage.
- Topic previews open on demand in native dialogs with Escape dismissal, focus restoration and background scroll locking.
- Complete curriculum restyled as spacious chapters without boxed topic rows.
- Verified production browser navigation across all 81 routes and 320/390/768/1440px widths, including preview dismissal and restored keyboard focus. Desktop and phone screenshots reviewed; final lint, TypeScript and production build passed.
