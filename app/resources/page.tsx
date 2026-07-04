import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { badgeClasses } from "@/components/home/badge-classes";
import { resources, type Resource } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Resources | Learn Robotics",
  description:
    "Curated robotics learning resources organized by foundations, robotics core topics, AI, and simulation.",
};

const categoryDetails: Record<
  Resource["category"],
  { title: string; description: string; studyNote: string }
> = {
  foundation: {
    title: "Foundations",
    description: "Math, programming, and physics resources that make later robot concepts easier.",
    studyNote: "Use these when a robotics explanation feels blocked by notation or basic mechanics.",
  },
  robotics: {
    title: "Robotics",
    description: "Robot-specific references for motion, controls, sensors, ROS 2, and systems.",
    studyNote: "Use these while building projects so theory stays connected to hardware and software.",
  },
  ai: {
    title: "AI and Simulation",
    description: "Learning-based robotics, simulation, and physical AI resources for later stages.",
    studyNote: "Use these after you can already reason about sensing, control, and robot state.",
  },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className={badgeClasses.accent}>Resources</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            A curated shelf for studying robotics without drowning in tabs.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-zinc-600">
            Resources are grouped by when they help: foundations for fluency, robotics for the
            core stack, and AI/simulation once the basics are in motion.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {(["foundation", "robotics", "ai"] as const).map((category) => {
            const detail = categoryDetails[category];
            const categoryResources = resources.filter(
              (resource) => resource.category === category,
            );

            return (
              <section key={category} aria-labelledby={`${category}-resources`}>
                <div className="mb-5 max-w-3xl">
                  <h2 id={`${category}-resources`} className="text-2xl font-black">
                    {detail.title}
                  </h2>
                  <p className="mt-2 text-base leading-7 text-zinc-600">
                    {detail.description}
                  </p>
                  <p className="mt-3 border-l-4 border-amber-300 pl-4 text-sm leading-6 text-zinc-700">
                    {detail.studyNote}
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  {categoryResources.map((resource) => (
                    <article
                      key={resource.title}
                      className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex flex-wrap gap-2">
                        <span className={badgeClasses.secondary}>{resource.type}</span>
                        <span className={badgeClasses.outline}>{resource.level}</span>
                        <span className={badgeClasses.outline}>{resource.cost}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-bold tracking-normal">
                        {resource.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-600">
                        {resource.description}
                      </p>
                      <p className="mt-4 rounded-lg bg-zinc-50 p-4 text-sm leading-6 text-zinc-700">
                        <span className="font-bold text-zinc-950">Use when:</span>{" "}
                        {resource.useWhen}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {resource.tags.map((tag) => (
                          <span key={tag} className={badgeClasses.outline}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                      >
                        Open resource
                        <ExternalLink className="size-4" aria-hidden="true" />
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
