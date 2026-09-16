# Implementation status

Approved scope: WEBSITE_INTENT.md.

- [x] Confirm implementation authorization and install React Flow / ELK.
- [x] Build warm site shell, expandable map and topic previews.
- [x] Publish four subject pages and twelve developed topic directories.
- [x] Build curated project collection and clearly labeled original proposals.
- [x] Check content, accessibility, responsive layouts, routes and production build.

All content is shared and static. No accounts, search or personalization in this release.

## Delivered

- Four subject pages, twelve topic pages, four build pages, homepage, collection and about page (23 published content routes).
- 27 free reading/reference entries, with hardware and software assumptions shown separately.
- Desktop and portrait map layouts; readable phone expansion, side previews, pan/zoom/reset, keyboard controls and no-JavaScript subject links.
- Existing curriculum and beginner lesson hidden; old resources URL redirects to the map.
- Production preview: http://localhost:3101. No deployment or git commit performed.

## Verification

- Production build and TypeScript: passed.
- ESLint: passed with no warnings.
- Eight Node tests: passed, including data reference integrity and geometry checks across 32 desktop/phone expansion layouts.
- Chrome browser suite: all 23 published routes, hidden/unknown routes, keyboard expansion, topic selection and resource disclosure passed.
- Responsive checks: 320, 390, 768 and 1440 pixels; no horizontal page overflow or browser page errors.
- Additional checks: fallback links with JavaScript disabled, site icon, final 404 behavior.
- Dependency audit after compatible security updates: zero reported vulnerabilities.
- Source review: corrected moved micro-ROS and Arduino URLs. Automated fetches of CTMS and Soft Robotics Toolkit were restricted; both were corroborated through indexed primary-source pages. External resources remain outside this repository's control. No physical build was independently verified.

## Maintenance

See README.md for content editing, layout regeneration, local startup and repeatable checks. Long-term ownership and review cadence remain the owner's open decisions.
