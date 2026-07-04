# Learn Robotics

Learn Robotics is a Next.js website for self-studying robotics. The goal is to combine a staged curriculum guide, links to high-quality learning resources, and follow-along projects that help learners build visible proof of skill.

## Tech stack

- Next.js App Router
- React
- Tailwind CSS
- shadcn/ui-style local components
- Vercel hosting

## Local development

Install dependencies and start the Next dev server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploying

Vercel should auto-detect this as a Next.js project. Connect the GitHub repo in Vercel, keep the default build command `npm run build`, and deploy from `main`.

## Repository map

- [app/](app/) - Next App Router pages, layout, and global styles.
- [components/](components/) - React sections and shadcn-style UI components.
- [data/](data/) - curriculum, resource, and project content used by the site.
- [public/images/](public/images/) - public website images.
- [curriculum/](curriculum/) - the four-stage robotics curriculum guide.
- [resources/](resources/) - links to courses, books, docs, tools, and references.
- [projects/](projects/) - follow-along project ideas and project format notes.
- [WEBSITE_ROADMAP.md](WEBSITE_ROADMAP.md) - how this repo can grow from a static page into a larger content site.

## Vision

The site should help a learner answer three questions:

1. What should I learn next?
2. Which resources are worth my time?
3. What can I build to prove I understand it?

The first version keeps the content model simple while using the same stack planned for production.
