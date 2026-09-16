# Learn Robotics backlog

Published to [Learn Robotics in Linear](https://linear.app/miguelmasc/project/learn-robotics-a55972a5e96a) in the MiguelMasc team. All 14 issues and six dependency links were verified. B13–B14 remain deferred in the Future discovery group.

Local keys B01–B14 map to verified Linear issues. All issues are in Backlog; B13–B14 remain deferred discovery. Assignees, dates and cycles are intentionally unset.

Prepared from WEBSITE_INTENT.md, IMPLEMENTATION_STATUS.md and the current repository. The older WEBSITE_ROADMAP.md is superseded where it conflicts with the agreed intent. These are proposed future tasks, not authorization to execute them.

## Guardrails

- Maximum one subtitle, label or caption per object/region.
- Shared static content, map-first discovery, free resources strongly preferred.
- Tutorial and curriculum stay hidden. Search, filters, visitor map editing and accounts remain out of current scope.
- Do not reopen the already-delivered site implementation or label untested builds verified.

## Backlog order

| Reference | Priority | Group | Issue | Depends on |
| --- | --- | --- | --- | --- |
| B01 | High | Release readiness | Align the roadmap and project documentation with the approved atlas | — |
| B02 | High | Release readiness | Make existing checks reproducible in continuous integration | — |
| B03 | High | Release readiness | Choose the public host, domain and release owner | — |
| B04 | High | Release readiness | Publish the first public release and complete launch metadata | B02, B03 |
| B05 | High | Content and trust | Audit every topic’s starting resources for a complete beginner | — |
| B06 | Normal | Content and trust | Establish source ownership and an honest resource review workflow | B05 |
| B07 | Normal | Content and trust | Strengthen evidence behind established uses and research directions | — |
| B08 | Normal | Content and trust | Define evidence required to call a build independently verified | — |
| B09 | Normal | Content and trust | Reproduce one small build and publish the resulting evidence | B08 |
| B10 | Normal | Explorer quality | Test map discovery with beginner visitors on desktop and phones | — |
| B11 | Normal | Explorer quality | Complete an assistive-technology review of the explorer | — |
| B12 | Low | Explorer quality | Remove hardcoded map membership and guard future layout growth | — |
| B13 | Low | Future discovery | Select the next fully developed robotics subject | B10, B12 |
| B14 | Low | Future discovery | Clarify the future value of a user-specific environment | — |

## B01 — Align the roadmap and project documentation with the approved atlas

Linear: [MIG-9](https://linear.app/miguelmasc/issue/MIG-9/align-the-roadmap-and-project-documentation-with-the-approved-atlas)

High priority · Release readiness · Backlog

WEBSITE_ROADMAP.md still proposes a staged curriculum and homepage content that conflict with the current website intent.

Acceptance criteria:

- Rewrite the roadmap around the four-subject atlas and clearly distinguish shipped work, upcoming work and deferred ideas.
- Resolve stale present-tense discovery wording in the intent document without changing the owner’s decisions or deleting their history.
- Record the maximum of one subtitle, label or caption per object/region as an ongoing acceptance criterion.
- Keep the tutorial and curriculum hidden; do not reintroduce search, filters or accounts.

Repository references: `WEBSITE_ROADMAP.md`, `WEBSITE_INTENT.md`, `README.md`, `IMPLEMENTATION_STATUS.md`.

## B02 — Make existing checks reproducible in continuous integration

Linear: [MIG-10](https://linear.app/miguelmasc/issue/MIG-10/make-existing-checks-reproducible-in-continuous-integration)

High priority · Release readiness · Backlog

The repository has local Node and browser checks but no checked-in .github workflow; browser checks currently rely on a separately supplied Playwright runtime.

Acceptance criteria:

- Add a pull-request workflow using a supported, pinned Node version and npm ci.
- Run lint, existing Node tests and production build; report failures independently.
- Provide a reproducible browser dependency and Chromium setup, start a production preview and run the existing browser script.
- Preserve the current route, hidden-page, keyboard and responsive coverage; add the single-supporting-text rule to the relevant rendered checks.
- Upload useful failure output/screenshots and shut down the preview process.

Repository references: `package.json`, `scripts/check-browser.cjs`, `tests/atlas.test.mjs`, `tests/first-robot.test.mjs`.

## B03 — Choose the public host, domain and release owner

Linear: [MIG-12](https://linear.app/miguelmasc/issue/MIG-12/choose-the-public-host-domain-and-release-owner)

High priority · Release readiness · Backlog

The site has a local production preview. Public hosting, domain, budget and operational ownership have not been decided.

Acceptance criteria:

- Record the owner’s selected host, domain or provisional host URL, budget and account ownership.
- Confirm support for the current Next.js runtime and image optimization; do not assume standalone HTML export.
- Document deployment credentials/setup requirements without storing secrets in the repository.
- Identify who can publish and roll back releases.

Repository references: `README.md`, `next.config.ts`.

## B04 — Publish the first public release and complete launch metadata

Linear: [MIG-13](https://linear.app/miguelmasc/issue/MIG-13/publish-the-first-public-release-and-complete-launch-metadata)

High priority · Release readiness · Backlog

A deployable local site exists, but no public deployment or canonical domain is recorded.

Acceptance criteria:

- Deploy the reviewed build to the selected host after the release decision is recorded.
- Use the actual public URL for canonical/social metadata and a sitemap of public content pages; exclude hidden drafts.
- Check HTTPS, image loading, direct topic/build URLs, old resources redirection and hidden-page 404s on the deployed host.
- Record the deployment URL, deployed revision and rollback procedure.
- Keep accounts, tracking and personalized features outside this release.

Depends on: B02, B03.

Repository references: `app/layout.tsx`, `app/icon.svg`, `README.md`.

## B05 — Audit every topic’s starting resources for a complete beginner

Linear: [MIG-15](https://linear.app/miguelmasc/issue/MIG-15/audit-every-topics-starting-resources-for-a-complete-beginner)

High priority · Content and trust · Backlog

The site assumes no prior robotics knowledge, while some linked resources require programming, calculus or hardware. The resource cards now combine descriptions and assumptions into one paragraph.

Acceptance criteria:

- Review the orientation and recommended resources for each of the twelve topics; replace unsuitable entry points with clearer free introductions where needed.
- Write natural, concise descriptions that explain necessary background or equipment without separate publisher labels or stacked captions.
- Distinguish free reading from paid software, hardware or account requirements within the single supporting text block.
- Retain useful publisher attribution in the content model and source links.
- Check the final rendered cards at phone and desktop sizes.

Repository references: `data/atlas.json`, `components/atlas/resource-card.tsx`, `app/topics/[slug]/page.tsx`.

## B06 — Establish source ownership and an honest resource review workflow

Linear: [MIG-17](https://linear.app/miguelmasc/issue/MIG-17/establish-source-ownership-and-an-honest-resource-review-workflow)

Normal priority · Content and trust · Backlog

Resources currently have no per-entry review date or review owner; external source maintenance remains unresolved.

Acceptance criteria:

- Agree an editorial owner and review cadence, and record the decision.
- Add review metadata for dates actually checked and the result of that review; do not fabricate historical dates.
- Provide a repeatable link-check command/report that distinguishes broken links, redirects, timeouts and anti-bot restrictions.
- Require a human/content check before replacing links that automated requests cannot verify.
- Keep operational review metadata out of the visible card hierarchy.

Depends on: B05.

Repository references: `data/atlas.json`, `README.md`.

## B07 — Strengthen evidence behind established uses and research directions

Linear: [MIG-18](https://linear.app/miguelmasc/issue/MIG-18/strengthen-evidence-behind-established-uses-and-research-directions)

Normal priority · Content and trust · Backlog

The topic context has source links, but several destinations are broad tool or course homepages rather than the most specific evidence for the nearby claim.

Acceptance criteria:

- For each topic, identify the precise section, original publication or documented example supporting its established-use and research text.
- Separate an unresolved research question from a practical engineering problem with known conditional solutions.
- Remove unsupported novelty or recency implications and retain primary-source attribution.
- Keep the explanations brief and avoid adding empty future subject nodes.

Repository references: `data/atlas.json`, `app/topics/[slug]/page.tsx`.

## B08 — Define evidence required to call a build independently verified

Linear: [MIG-20](https://linear.app/miguelmasc/issue/MIG-20/define-evidence-required-to-call-a-build-independently-verified)

Normal priority · Content and trust · Backlog

Current build pages correctly distinguish external documentation and untested proposals. A stronger verified status has no agreed evidence standard.

Acceptance criteria:

- Define required evidence: exact component revisions, wiring, software versions, setup, measured checkpoints, failure cases and a reproducible outcome.
- Distinguish publisher documentation from independent reproduction by this project.
- Document how evidence, limitations and review dates are recorded and maintained.
- Do not change any existing build to verified without the required evidence.

Repository references: `data/builds.json`, `app/about/page.tsx`, `WEBSITE_INTENT.md`.

## B09 — Reproduce one small build and publish the resulting evidence

Linear: [MIG-21](https://linear.app/miguelmasc/issue/MIG-21/reproduce-one-small-build-and-publish-the-resulting-evidence)

Normal priority · Content and trust · Backlog

The collection has two documented external builds and two original proposals, but none has been physically reproduced by this project.

Acceptance criteria:

- Choose one build with an available hardware tester and an agreed component budget; favor accessible, inexpensive equipment.
- Perform the physical experiment and record actual results against the verification standard.
- Publish reproducible instructions, relevant original media and troubleshooting based on observed failures.
- Only update the build’s readiness once its evidence meets the agreed standard; retain proposal status if validation remains incomplete.

Depends on: B08.

Repository references: `data/builds.json`, `app/projects/[slug]/page.tsx`.

## B10 — Test map discovery with beginner visitors on desktop and phones

Linear: [MIG-23](https://linear.app/miguelmasc/issue/MIG-23/test-map-discovery-with-beginner-visitors-on-desktop-and-phones)

Normal priority · Explorer quality · Backlog

Automated checks cover mechanics and responsiveness, but they do not establish whether a newcomer understands the map or can choose a useful starting point.

Acceptance criteria:

- Observe a small set of beginner visitors following the homepage → subject → subtopic → preview → resource/build journey.
- Check whether visitors interpret connections as relationships rather than prerequisites.
- Observe phone pan, zoom, fit view and expanded-topic discovery; record specific task failures and confusing language.
- Create evidence-backed follow-up fixes, preserving the map-first approach and the one-supporting-text rule.

Repository references: `components/atlas/atlas.tsx`, `app/page.tsx`, `WEBSITE_INTENT.md`.

## B11 — Complete an assistive-technology review of the explorer

Linear: [MIG-25](https://linear.app/miguelmasc/issue/MIG-25/complete-an-assistive-technology-review-of-the-explorer)

Normal priority · Explorer quality · Backlog

Keyboard buttons and no-JavaScript links have been tested; an actual screen-reader and touch accessibility review is not recorded.

Acceptance criteria:

- Check topic selection announcements and focus continuity with a screen reader.
- Check keyboard navigation to topics outside the current viewport and focus after preview content changes.
- Check touch targets, zoomed text, reduced motion and contrast on the active templates.
- Fix observed issues without introducing a second visible navigation hierarchy or extra captions.
- Record manual test conditions and outcomes alongside the existing browser checks.

Repository references: `components/atlas/atlas.tsx`, `components/atlas/site-shell.tsx`, `app/globals.css`, `scripts/check-browser.cjs`.

## B12 — Remove hardcoded map membership and guard future layout growth

Linear: [MIG-27](https://linear.app/miguelmasc/issue/MIG-27/remove-hardcoded-map-membership-and-guard-future-layout-growth)

Low priority · Explorer quality · Backlog

The generator hardcodes sixteen states and four subject relationships. Exhaustively precomputing expansion combinations will grow exponentially if subjects are added.

Acceptance criteria:

- Move subject relationships into validated content data rather than duplicating IDs in the generator.
- Derive expansion-state counts for the supported release instead of hardcoding sixteen.
- Fail clearly when generated layouts are stale or content relationships reference missing subjects.
- Document a bounded strategy for larger maps before expanding the subject set; retain precomputed routing for the current release.
- Preserve geometry checks for both desktop and phone layouts and relationship semantics.

Repository references: `scripts/generate-atlas-layouts.mjs`, `data/atlas.json`, `tests/atlas.test.mjs`.

## B13 — Select the next fully developed robotics subject

Linear: [MIG-28](https://linear.app/miguelmasc/issue/MIG-28/select-the-next-fully-developed-robotics-subject)

Low priority · Future discovery · Deferred discovery

Perception, mapping, planning and learning are possible expansion areas. The owner prefers fewer developed subjects over broad placeholder coverage.

Acceptance criteria:

- Use visitor findings and available high-quality free resources to compare candidate subjects.
- Propose one subject with a useful external orientation, developed subtopics, research context and practical examples.
- Obtain the owner’s scope decision before creating pages or map nodes.

Depends on: B10, B12.

Future discovery only. Expanding the first-release subject set is not an approved implementation task.

Repository references: `WEBSITE_INTENT.md`.

## B14 — Clarify the future value of a user-specific environment

Linear: [MIG-30](https://linear.app/miguelmasc/issue/MIG-30/clarify-the-future-value-of-a-user-specific-environment)

Low priority · Future discovery · Deferred discovery

The owner mentioned a possible user-specific environment later, while explicitly choosing a shared static site now.

Acceptance criteria:

- Identify a concrete returning-visitor problem that personalization would solve.
- Compare local-only and account-based approaches, including maintenance and privacy implications.
- Record a go/no-go decision and, only if approved, a separate scoped implementation brief.

Deferred. Do not implement accounts, saved progress or a backend from this issue.

Repository references: `WEBSITE_INTENT.md`.

## Linear issue mapping

| Reference | Linear issue | Group |
| --- | --- | --- |
| B01 | [MIG-9](https://linear.app/miguelmasc/issue/MIG-9/align-the-roadmap-and-project-documentation-with-the-approved-atlas) | Release readiness |
| B02 | [MIG-10](https://linear.app/miguelmasc/issue/MIG-10/make-existing-checks-reproducible-in-continuous-integration) | Release readiness |
| B03 | [MIG-12](https://linear.app/miguelmasc/issue/MIG-12/choose-the-public-host-domain-and-release-owner) | Release readiness |
| B04 | [MIG-13](https://linear.app/miguelmasc/issue/MIG-13/publish-the-first-public-release-and-complete-launch-metadata) | Release readiness |
| B05 | [MIG-15](https://linear.app/miguelmasc/issue/MIG-15/audit-every-topics-starting-resources-for-a-complete-beginner) | Content and trust |
| B06 | [MIG-17](https://linear.app/miguelmasc/issue/MIG-17/establish-source-ownership-and-an-honest-resource-review-workflow) | Content and trust |
| B07 | [MIG-18](https://linear.app/miguelmasc/issue/MIG-18/strengthen-evidence-behind-established-uses-and-research-directions) | Content and trust |
| B08 | [MIG-20](https://linear.app/miguelmasc/issue/MIG-20/define-evidence-required-to-call-a-build-independently-verified) | Content and trust |
| B09 | [MIG-21](https://linear.app/miguelmasc/issue/MIG-21/reproduce-one-small-build-and-publish-the-resulting-evidence) | Content and trust |
| B10 | [MIG-23](https://linear.app/miguelmasc/issue/MIG-23/test-map-discovery-with-beginner-visitors-on-desktop-and-phones) | Explorer quality |
| B11 | [MIG-25](https://linear.app/miguelmasc/issue/MIG-25/complete-an-assistive-technology-review-of-the-explorer) | Explorer quality |
| B12 | [MIG-27](https://linear.app/miguelmasc/issue/MIG-27/remove-hardcoded-map-membership-and-guard-future-layout-growth) | Explorer quality |
| B13 | [MIG-28](https://linear.app/miguelmasc/issue/MIG-28/select-the-next-fully-developed-robotics-subject) | Future discovery |
| B14 | [MIG-30](https://linear.app/miguelmasc/issue/MIG-30/clarify-the-future-value-of-a-user-specific-environment) | Future discovery |

When updating this backlog, reuse these verified issue and project IDs. Keep dependencies in Linear synchronized with the local planning references. The planned Normal priority maps to Linear’s Medium (3).
## Publication record

Created and verified 14 issues across Release readiness, Content and trust, Explorer quality, and Future discovery. All use the team’s Backlog status. The two future-discovery issues also carry the Deferred discovery label and an explicit scope gate. Priorities are proposed; assignees, dates and cycles remain unset.

Use the verified IDs in linear-backlog.json to update these issues rather than recreating them.

## Project consolidation

The canonical project is [Learn Robotics](https://linear.app/miguelmasc/project/learn-robotics-a55972a5e96a). The other project was renamed Learn Robotics — merged and set to Canceled. Its 14 issues are marked Duplicate and link to their retained counterparts; historical issue content remains available. All six canonical dependency links and both deferred-discovery labels were verified.

Kanban layout setup remains pending because the connector cannot save board views and the Windows UI tool rejected this Linux workspace. In the canonical project’s Issues tab, choose Display options → Board, group by Status, enable Show empty groups, and Set as default. The existing workflow is Backlog → Todo → In Progress → In Review → Done.
