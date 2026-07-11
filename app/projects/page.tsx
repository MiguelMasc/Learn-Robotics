import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { badgeClasses } from "@/components/home/badge-classes";
import { ProjectCard } from "@/components/projects/project-card";
import { publishedProjects } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Project Proposals | Learn Robotics",
  description:
    "Build-ready robotics proposals with goals, phased parts lists, safety gates, kits, and open-source references.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            Choose a build with a clear finish line.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            These proposals are ready for planning: each one has a recommended platform,
            prerequisites, measurable success criteria, phased parts lists, safety gates, and
            links to established kits and open-source code.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black">Current proposals</h2>
            <p className="mt-2 max-w-2xl text-base text-zinc-600">
              Start with the ground vehicle, or take on the microdrone after basic feedback
              control and telemetry feel familiar.
            </p>
          </div>
          <span className={badgeClasses.secondary}>
            {publishedProjects.length} proposals
          </span>
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          {publishedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
