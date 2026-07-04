# Website Roadmap

This repo is now set up as a Next.js site that can grow gradually: start with a polished homepage, then split curriculum stages, resources, and projects into dedicated routes as the content gets deeper.

## Near term

- Deploy the Next app on Vercel.
- Keep the curriculum, resources, and projects visible on the homepage while content is still compact.
- Convert each project idea into a follow-along guide with prerequisites, materials, steps, checkpoints, and extensions.
- Add contribution rules so people can suggest resources without turning the list into a dump.
- Add a simple review date to resource entries.

## Content model

### Curriculum page

- Stage: Foundations, Core Engineering, Robotics Core, Specialization.
- Topics: course-like units with learning goals and prerequisites.
- Checkpoints: concrete proof that a learner is ready for the next stage.
- Resources: primary and optional links attached to each topic.

### Resource page

- Category: math, programming, electronics, controls, ROS 2, perception, planning, machine learning, safety.
- Cost: free, free audit, paid, or book.
- Level: beginner, intermediate, advanced.
- Why it belongs: one short note explaining when to use it.

### Project page

- Outcome: what the learner will build.
- Prerequisites: concepts and tools needed before starting.
- Materials: software, hardware, and optional substitutions.
- Build steps: small milestones with visible checks.
- Debugging notes: common failures and how to recognize them.
- Extensions: ways to make the project harder after the base version works.

## Later

- Add route groups such as `/curriculum`, `/resources`, and `/projects`.
- Add MDX or a small CMS when editing long-form project guides in React becomes tedious.
- Add project demo media and downloadable starter files.
- Add a showcase section for completed learner projects.
