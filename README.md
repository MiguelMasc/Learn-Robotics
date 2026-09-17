# Learn Robotics

A subject atlas for people exploring robotics. The agreed product direction and decision history live in [WEBSITE_INTENT.md](WEBSITE_INTENT.md).

The map covers 62 topics across 11 subjects, from high school foundations through master’s-level robotics. Explore a six-stage learning journey or an expandable subject graph. Every topic includes prerequisites, three learning outcomes, a suggested exercise, free learning references and research context. Six example concentrations connect advanced electives. The curriculum is an editorial synthesis, not an accredited degree or an institution-specific requirement list. A separate build collection distinguishes publisher-documented instructions from original, untested proposals.

## Run locally

Use Node 20.19 or newer (Node 22 recommended).

```bash
npm ci
npm run dev -- --port 3101
```

Open http://localhost:3101. For a production preview:

```bash
npm run build
npm run start -- --port 3101
```

All published pages are prerendered by Next.js. Map interaction happens in the browser. There are no accounts, database, search, personalized content or required environment variables. The project uses the Next.js runtime for routing and image optimization; it is not configured as a standalone HTML export.

## Edit the collection

- `data/atlas.json`: subjects, topics, resource metadata and source URLs. Resource IDs are shared to avoid duplicate editorial entries. Topic orientations, research sources, established-use sources and foundational references are explicit.
- `data/journey.ts`: six learning stages, integration milestones, readiness criteria and example specialization tracks.
- `lib/atlas-layout.mjs`: shared ELK layout function for overview generation and dynamic expansion.
- `app/curriculum/page.tsx`: complete chronological curriculum, available without JavaScript.
- `data/builds.json`: build overviews, equipment, checkpoints, source attribution and readiness. `external` means publisher-documented, not independently verified here; `proposal` means untested.
- `components/atlas/`: current shell, interactive explorer and reusable cards.
- `app/topics/[slug]/page.tsx`: subject and topic page template; all known slugs generated at build time.
- `app/projects/`: the build collection and detail pages.
- `app/globals.css`: warm palette, typography and responsive layouts.

No resource should be described as free without distinguishing free reading from purchased hardware, paid software or optional account requirements. Resource assumptions are displayed on each card. Research directions are editorial context, not a continuously updated news service.

## Map layout

React Flow handles selection, pan and zoom. Two ELK overview layouts are generated ahead of time. Expanding subjects lazily loads ELK and computes only the requested graph in the browser, rather than storing exponentially many expansion states. Stale layout responses are ignored. The subject selector focuses any branch without requiring precise panning.

```bash
npm run map:generate
```

This regenerates the desktop and portrait overview layouts. Run it after changing subject IDs, relationships or map dimensions. Solid edges show subjects working together; dashed edges connect a subject to its topics. Prerequisites are explicit links in the learning journey and topic pages; they are not the meaning of subject-map edges. There are no visitor editing tools.

## Verification

```bash
npm test
npm run lint
npm run build
npm audit
```

Tests check content references, practical exercises, six-stage coverage, prerequisite ordering and cycles, node overlap and edge routing for both overviews, every individual expansion, a mixed expansion and the fully expanded map. The preserved simulator also has motion and command-validation tests.

`scripts/check-browser.cjs` exercises all 81 published content routes, all subject expansions, journey stage selection, prerequisite navigation, resource disclosure, no-JavaScript access and 320/390/768/1440px layouts. It uses Playwright, available separately in the test environment:

```bash
node scripts/check-browser.cjs /absolute/path/to/playwright /absolute/path/to/chrome /optional/screenshot/directory
```

Omit the module and executable arguments when `playwright` and its Chromium browser are installed locally. `SITE_URL` defaults to http://localhost:3101. The browser script is separate from `npm test` because it needs a running production server and a browser runtime.

## Preserved drafts

The earlier 31-course curriculum data and tutorial sources are retained as drafts. `/curriculum` now publishes the new complete learning map independently of that old course list. `/tutorials/first-robot` remains hidden with a 404; the old `/resources` entry redirects to the map. Earlier curriculum data and older home components are not part of the active site.

The beginner tutorial flag in `data/site-features.ts` restores its route only; adding it to the new navigation would be a separate editorial decision. `public/tutorials/first-robot.html` remains an unlisted standalone simulator. It models ideal differential-drive motion without slip, obstacles or sensor noise. The draft checklist uses local storage; the active atlas does not save progress.

## Deployment

Deploy as a Next.js application on a compatible host, using `npm run build`. No deployment was performed as part of this implementation. Set the eventual public domain and social/canonical metadata when a production host is chosen.
