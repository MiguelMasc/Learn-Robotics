# Learn Robotics — Website Intent

Status: The owner has now requested the complete field map from high school through master’s-level robotics; this expands the earlier introductory release. Implementation was explicitly authorized by the owner. See IMPLEMENTATION_STATUS.md for delivered scope and checks.

## How we will use this document

Capture the owner's reasons for creating the website, the people it should serve,
and the outcomes it should help them achieve. Update it as the discussion develops.
Keep confirmed decisions separate from assumptions, suggestions, and unresolved
questions. Do not treat the current implementation as proof of the intended product.

The discovery discussion is complete and the owner has authorized the entire implementation.
The discovery history below records why the decisions were made. Earlier unapproved
layout recommendations remain suggestions.

## Confirmed decisions

- Establish the website's purpose and intended experience together before a complete implementation.
- Ask direct questions and challenge vague or conflicting requirements.
- Conduct discovery through short rounds of multiple-choice questions in the conversation; the owner should not need to fill out a worksheet. Display questions directly in chat because the question cards did not appear.
- Organize exploration primarily by subject, including mechanics, electronics, programming, perception, control, and their connections.
- Make topic pages resource directories: a short description and organized external resources, with a link to an orientation. Orientations link to excellent existing external introductions.
- Cover established capabilities, current research, and open problems within each topic.
- Use a visual subject map as the primary explorer (option 6A). Initially show major subjects only; expand subjects to reveal subtopics (7A). Connections show subjects that work together (8B). Selecting a topic opens a short preview beside the map, with a link to its full topic page (9C).
- Avoid nested subtitles. Keep visible headings simple and avoid stacking an eyebrow, heading, and repeated subtitle for the same content.
- Keep the beginner tutorial hidden for now, preserving its implementation.
- In the future implementation, put a prominent image and introduction on the homepage, followed by the map farther down (10B).
- Hide the existing 31-course curriculum and develop the topic directory independently (11C); this is a requirement for the later implementation, not an instruction to change the site during discovery.
- Include project examples within topics and a separate collection of build guides (12C).
- The reason for hiding the tutorial has not yet been established. This does not imply that all tutorials are unwanted.

## Existing project framing — needs owner confirmation

The README describes Learn Robotics as a website for self-studying robotics, combining
a curriculum, curated resources, and projects that demonstrate skills.
It proposes helping a learner answer:

1. What should I learn next?
2. Which resources are worth my time?
3. What can I build to prove I understand it?

These are useful starting hypotheses, not newly confirmed requirements.

## Purpose

- Why the owner wants this website: **To guide people through the robotics field. Should not hold your hand, rather mapout what is out there.**
- Primary audience: **Beginners into Intermediate Robotics enthusiasts**
- Audience's current knowledge and constraints: **Nothing is expected to be known. Should map everything but allow users to set their own starting point.**
- Most important problem to solve: **Lack of guidance.**
- Concrete outcome the website should enable: **Someone should be able to know nothing about robotics and understand what the field has done and where it's going**
- Why someone would choose this over their current approach: **Free, Self-Guided, Comprehensive.**

Purpose statement synthesized from the owner's answers:

> Learn Robotics helps beginner and intermediate enthusiasts understand the robotics
> field and choose their own way through it. It connects related subjects through
> an explorable map, strongly favors free learning resources, and shows how ideas
> connect to real projects, established capabilities, and open questions.

Comprehensive coverage is the long-term ambition. The first version deliberately
focuses on fewer subjects with deeper resource collections and project examples (17B).

## Intended experience

- What a first-time visitor should understand: **The site maps related areas of robotics and lets them choose a starting point without assumed prior knowledge.**
- First useful action: **Explore a major subject, reveal its subtopics, and select a topic to preview it or visit its resource page.**
- What a returning visitor comes back to do: **Proposed: revisit a topic, find another learning resource, or connect an interest to a build guide. No personalized dashboard is planned.**
- Primary role of the site: **A self-guided map of the robotics field, organized by subject, with resource-directory topic pages and linked orientations.**
- Relationship between curriculum, resources, and projects: **The map connects related subjects and leads to resource-directory topic pages. Project examples appear within topics, with a separate collection of build guides. Hide the existing 31-course curriculum while developing the topic directory independently.**
- Meaning of map connections: **Subject relationships—fields that work together. They do not encode a prerequisite sequence.**
- Amount of guidance versus freedom to explore: **Users choose their own starting point. Provide orientation without imposing a step-by-step learning sequence.**
- Role of original tutorials and interactive simulations: **Unresolved**

## Content and trust

- Topics to include and exclude: **Cover fewer subjects initially, with deeper resource collections and more project examples (17B). The owner delegated selection (19C). Start with mechanical design, electronics and sensing, programming, and motion and control; see the initial scope below.**
- Desired technical depth and prerequisites: **Unresolved**
- Original instruction versus curated external material: **Topic pages prioritize organized external resources and link to an orientation. Orientations are curated external introductions, not original on-site lessons.**
- Resource directory depth: **Show a few recommended starting points first, followed by an expandable broader directory.**
- Placement of achievements and future directions: **Within each topic: established capabilities, current research, and open problems.**
- Resource access and cost: **Strongly favor free options. Include worthwhile paid resources only with clear cost labels; free access is the strong default, not merely an equal filter choice (13B with emphasis).**
- Build-guide sources: **Include both curated external builds and original guides, with proposals and untested ideas clearly separated from verified guides (14C).**
- Evidence required before calling a project or tutorial complete: **Distinguish verified guides from proposals and untested ideas. Exact verification criteria remain unresolved.**
- Sources, attribution, review, and maintenance expectations: **Unresolved**
- Who will create and maintain content: **Unresolved**

## Initial subject scope — selected under delegated authority

Start with four connected subjects. This covers the physical robot, its signals,
its software, and its behavior while keeping the first release focused enough for
substantial resource collections and practical examples.

| Subject | Initial subtopics | Practical connections |
| --- | --- | --- |
| Mechanical design | Structures and materials; mechanisms and drivetrains; CAD and fabrication | How a chassis and mechanism affect sensors, motors, and motion |
| Electronics and sensing | Circuits and power; microcontrollers and interfaces; sensors and measurements | How a robot receives measurements and powers its actuators |
| Programming | Programming fundamentals; working with sensor data; communication and robot software structure | How software connects measurements, decisions, and commands |
| Motion and control | Actuators and motor control; position and motion models; feedback and PID | How mechanics, electronics, and software produce repeatable movement |

Use small mobile-robot and line-following examples to connect these subjects,
without reorganizing the site around a robot type or imposing a build sequence.
Include suitable external orientations and a few free recommended starting points
for each subtopic, followed by a deeper curated directory. Original project ideas
remain explicitly labeled until their evidence supports a stronger status.

Advanced perception, mapping, planning, learning, and specialist robot platforms
are expansion areas. Mention relevant connections and research directions where
useful, but do not present undeveloped areas as complete directories or add empty
clickable nodes to simulate comprehensive coverage. Link any necessary supporting
math or physics introductions from the relevant topics.

## Visual direction and layout

- Desired character and tone: **The warm color and tone of option A (practical workshop). This confirms the color/tone, not every detail of that mockup.**
- Map appearance: **A crisp flowchart canvas with clean connections, pan, zoom, and topic exploration (16A). The current site is for exploring curated content; visitor drawing and editing are outside the current scope.**
- Map tooling under consideration: **Assistant recommends React Flow for the interactive canvas, paired with ELK/elkjs for automatic placement and connection routing. The owner selected the crisp, exploratory flowchart experience rather than whiteboard editing. Implemented with React Flow and precomputed ELK layouts, including a portrait phone layout.**
- Existing elements to keep: **A prominent homepage image and introduction, with the interactive map farther down. Exact imagery and styling remain unresolved.**
- Existing elements to change or remove: **Hide the existing 31-course curriculum in the next implementation; preserve the already-hidden beginner tutorial draft.**
- Reference websites and the specific qualities to borrow: **Unresolved**
- Preferred balance of information density, imagery, and interaction: **Use a prominent homepage image and introduction before the visual map of major subjects. Reveal subtopics on expansion, and show a short topic preview beside the map with a link to the full page.**
- Heading treatment: **Avoid nested subtitles and redundant layers of introductory labels.**
- Primary devices and accessibility needs: **Unresolved**

Earlier assistant suggestions, not approved design decisions:

- Shorten the homepage hero.
- Move featured projects earlier on the homepage.
- Place curriculum details beside the course list on desktop and near the selected course on mobile.
- Condense the homepage subject overview.
- Reduce competing visual emphasis in typography and cards.

## Scope and constraints

- Must be present in the first complete implementation: **Warm homepage imagery and introduction; an expandable subject map with clean relationship connections; topic previews and dedicated resource pages; linked external orientations; recommended resources above a broader directory; topic-linked project examples and a separate build-guide collection. Focus on a smaller, well-developed subject set.**
- Explicitly out of scope: **Accounts, user-specific environments, visitor editing of the map, search, and resource filters in the current static-site version.**
- Features to defer: **The beginner tutorial and existing 31-course curriculum remain hidden in the next implementation. A user-specific environment is a possible future direction, not a commitment or current requirement.**
- Need for accounts, saved progress, search, or other personal features: **Map-led discovery only for the first version (18C). No search or filters, accounts, or user-specific environment.**
- Current delivery model: **A static site with shared curated content. Browser-side map interactions remain part of the selected experience; no user backend is required for them. Static export/hosting mechanics are an implementation detail, not yet specified.**
- Public versus personal use: **A shared site now; potentially a user-specific environment later.**
- Budget, hosting, privacy, and maintenance constraints: **Unresolved**
- Decisions the owner wants to retain versus delegate: **The owner delegates the balanced initial subject selection to the assistant (19C). The owner subsequently authorized the entire implementation and delegated routine implementation choices.**

## Success and acceptance

- Observable signs that the website serves its purpose: **Proposed: a newcomer can explore an included subject, understand its relationships, find a suitable free orientation or resource, and identify a relevant project without needing a prescribed course sequence.**
- Example visitor journey that the implementation must support: **Homepage introduction → major subject → expanded subtopics → topic preview → full resource page → external orientation or a relevant build guide.**
- Review criteria before release: **Proposed: readable map connections and labels, usable topic expansion and previews, working curated links, clear cost and project-readiness labels, responsive keyboard-accessible navigation, no nested subtitles, and no visible deferred curriculum/tutorial.**
- Authorization to begin complete implementation: **Given: "Go ahead and implement the entire thing."**

## Remaining choices and implementation defaults

- **Initial subject selection:** delegated to the assistant (19C) and defined below. No further discovery answer is needed to choose the starting subjects.
- **Implemented technical approach:** React Flow plus ELK/elkjs. Both dependencies were installed after authorization; layout generation runs ahead of time.
- **Implemented defaults:** responsive desktop and mobile layouts, keyboard-accessible topic controls, and shared content stored in the repository.
- **Editorial details to resolve during implementation:** exact sources, attribution, review dates, and evidence behind any verified-build label. Never invent verification.
- **Long-term ownership remains open:** who maintains resources after the first release and how often.
- **Implementation authorization:** given. Implement the agreed scope, resolve routine technical and editorial decisions, and verify the complete experience.

## Decision log

Record future decisions with their reason and practical implications. Do not silently
replace a confirmed decision when a later answer changes it; note the revision here.

| Decision | Reason | Implication |
| --- | --- | --- |
| Discuss intent before complete implementation | Owner explicitly requested a collaborative discovery phase | Continue the discussion and maintain this brief; wait for implementation authorization |
| Hide the beginner tutorial for now | Owner requested it; underlying reason pending | Preserve the draft and keep its route and entry points disabled |
| Organize exploration by subject | Owner selected 1A | Use subjects as the primary information architecture; robot types and applications are not the primary organizing scheme |
| Lead topic pages with a resource directory and link to an orientation | Owner selected 2C with an explicit orientation-link addition | Keep topic pages focused on discovery; determine where the linked orientation lives before implementation |
| Integrate achievements and future directions into each topic | Owner selected 3A | Contextualize established capabilities, current research, and open problems alongside topic resources |
| Link to external orientations | Owner selected 4B | Choose strong existing introductions rather than authoring orientation pages |
| Layer recommended resources over a broader directory | Owner selected 5C | Present a few starting points first and let visitors expand to explore more |
| Use the visual map as the primary explorer | Owner selected 6A after comparing mockups | Develop the map approach; directory-first alternatives B and C were not selected |
| Avoid nested subtitles | Explicit owner preference | Use simple visible headings without redundant stacked introductory labels |
| Start with major subjects and reveal subtopics on expansion | Owner selected 7A | Keep the initial map focused and let visitors open areas of interest |
| Show relationships between subjects | Owner selected 8B | Map connections describe fields working together, not prerequisite ordering |
| Preview a topic beside the map, then link to its full page | Owner selected 9C | Preserve map context while offering a dedicated resource page for deeper exploration |
| Place a prominent image and introduction before the homepage map | Owner selected 10B | Preserve a substantial introduction; the earlier shorter-hero suggestion is not an approved requirement |
| Hide the existing 31-course curriculum | Owner selected 11C | Develop the subject directory independently; apply this visibility change in the future implementation |
| Include topic-linked examples and a separate build-guide collection | Owner selected 12C | Projects support exploration within topics and have a dedicated place for practical builds |
| Strongly prefer free learning resources | Owner selected 13B with a strong affinity for free options | Lead with free choices; clearly label worthwhile paid alternatives |
| Include curated and original builds with explicit readiness distinctions | Owner selected 14C | Separate verified build guides from proposals and untested ideas; do not imply an untested build is verified |
| Use option A color and tone | Owner prefers the workshop color/tone | Retain a warm palette; do not infer approval of every A layout detail |
| Make the map resemble a clean flowchart or Excalidraw canvas | Owner requested cleaner lines and asked about existing libraries | Evaluate established diagram tools; clarify visual style versus drawing/editing behavior before choosing |
| Use a crisp exploratory flowchart canvas | Owner selected 16A | Support pan, zoom, and topic exploration; no drawing/editing tools in the current experience |
| Keep the current version static and defer user-specific environments | Explicit owner scope clarification | Use shared curated content and browser-side interactions; avoid accounts or a personalization backend now |
| Focus the first version on fewer subjects with deeper coverage | Owner selected 17B | Prioritize developed resource collections and project examples; comprehensive coverage remains a longer-term goal |
| Use map exploration alone for initial discovery | Owner selected 18C | Defer search and filters; keep map navigation and topic relationships clear |
| Delegate the balanced initial subject selection | Owner selected 19C | Begin with mechanical design, electronics and sensing, programming, and motion and control; preserve the focused first-release scope |
| Implement the agreed website | Owner explicitly requested the entire implementation | Build and verify the approved static site; no further discovery approval is needed |

| Complete the first implementation | Approved discovery decisions translated into a working site | Four subjects, twelve topics, curated references, four builds, responsive map, and verification recorded in IMPLEMENTATION_STATUS.md |

| Limit supporting labels | Owner requested a maximum of one subtitle, label, or caption per object/region | Remove publisher eyebrows and repeated badges/captions; use a title and one supporting text block. Preserve essential readiness and requirements in the body text. |

## Scope expansion — September 16, 2026

The owner requested: “implement a complete map of robotics. If a person were to go from high school graduate to masters in robotics what would they see?” This supersedes the four-subject limit and the decision to hide any learning sequence. The older 31-course dataset remains a draft; the new `/curriculum` route is an independent synthesis of the expanded topic directory.

The implementation provides 11 subjects, 62 developed topics, six learning stages, explicit prerequisites, learning outcomes, suggested exercises, six example specialization tracks and 53 shared references. The homepage supports both a learning journey and a subject relationship graph. Degree-year labels indicate approximate depth, not a required duration. Advanced branches are labeled electives, and thesis and professional systems-project routes are distinguished. University catalogs and primary learning resources inform the synthesis; it is not a university’s exact degree plan.

The warm visual style, resource-directory topic pages, free-reading preference, shared static content and existing build-readiness distinctions continue to apply. Accounts, saved progress and the beginner tutorial are still outside the active scope.

## Visual refinement — open layouts for newcomers

The owner clarified that the audience is non-technical and accustomed to open layouts. The homepage now prioritizes generous spacing, larger text, soft sage and cream colors, simple subject and stage icons, and everyday language. Topic details appear in an accessible modal only after selection, replacing the permanently visible dense sidebar in the learning journey. The complete curriculum uses open columns and larger chapter spacing. The full topic coverage and subject graph remain available.
