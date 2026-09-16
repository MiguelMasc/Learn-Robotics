# Learn Robotics

A subject atlas for people exploring robotics. The agreed product direction and decision history live in [WEBSITE_INTENT.md](WEBSITE_INTENT.md).

The first release covers mechanical design, electronics and sensing, programming, and motion and control. Each subject opens into three topic directories with external orientations, recommended free resources, research context, related topics and practical examples. A separate build collection distinguishes publisher-documented instructions from original, untested proposals.

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
- `data/builds.json`: build overviews, equipment, checkpoints, source attribution and readiness. `external` means publisher-documented, not independently verified here; `proposal` means untested.
- `components/atlas/`: current shell, interactive explorer and reusable cards.
- `app/topics/[slug]/page.tsx`: subject and topic page template; all known slugs generated at build time.
- `app/projects/`: the build collection and detail pages.
- `app/globals.css`: warm palette, typography and responsive layouts.

No resource should be described as free without distinguishing free reading from purchased hardware, paid software or optional account requirements. Resource assumptions are displayed on each card. Research directions are editorial context, not a continuously updated news service.

## Map layout

React Flow handles selection, pan and zoom. ELK generates orthogonal routes ahead of time; the client receives node coordinates and the actual ELK bend points, without shipping the ELK layout engine.

```bash
npm run map:generate
```

This regenerates all 16 expansion states for both the desktop and portrait phone layouts. Run it after changing subject IDs, membership or map dimensions. The generator currently targets the approved four-subject release. Solid edges show subjects working together; dashed edges connect a subject to its topics. There are no prerequisite arrows or editing tools.

## Verification

```bash
npm test
npm run lint
npm run build
npm audit
```

Tests check content references, project coverage, both sets of layout states, node overlap and edge routing. The preserved simulator also has motion and command-validation tests.

`scripts/check-browser.cjs` exercises published and hidden routes, keyboard expansion, selection, resource disclosure and 320/390/768/1440px layouts. It uses Playwright, available separately in the test environment:

```bash
node scripts/check-browser.cjs /absolute/path/to/playwright /absolute/path/to/chrome /optional/screenshot/directory
```

Omit the module and executable arguments when `playwright` and its Chromium browser are installed locally. `SITE_URL` defaults to http://localhost:3101. The browser script is separate from `npm test` because it needs a running production server and a browser runtime.

## Preserved drafts

The earlier curriculum and tutorial sources are retained. `/curriculum` and `/tutorials/first-robot` return 404; the old `/resources` entry redirects to the map. Existing curriculum data and the older home components are not part of the active site.

The beginner tutorial flag in `data/site-features.ts` restores its route only; adding it to the new navigation would be a separate editorial decision. `public/tutorials/first-robot.html` remains an unlisted standalone simulator. It models ideal differential-drive motion without slip, obstacles or sensor noise. The draft checklist uses local storage; the active atlas does not save progress.

## Deployment

Deploy as a Next.js application on a compatible host, using `npm run build`. No deployment was performed as part of this implementation. Set the eventual public domain and social/canonical metadata when a production host is chosen.
