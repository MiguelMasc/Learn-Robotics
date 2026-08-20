import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { badgeClasses } from "@/components/home/badge-classes";
import { SectionHeading } from "@/components/home/section-heading";
import { publishedProjects } from "@/data/site-content";

const featuredProjects = publishedProjects.slice(0, 3);

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="Build something you can finish."
        description="Every project has a clear goal, a safe first step, and a visible result."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <span className={badgeClasses.secondary}>{project.level}</span>
            <h3 className="mt-4 text-xl font-bold leading-tight">{project.title}</h3>
            <p className="mt-3 flex-1 leading-7 text-zinc-600">{project.summary}</p>
            <Link
              href={`/projects/${project.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-950"
            >
              See the project
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
      >
        Browse all projects
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </section>
  );
}
