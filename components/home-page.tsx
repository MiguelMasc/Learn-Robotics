import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Wrench } from "lucide-react";

import { CurriculumSection } from "@/components/home/curriculum-section";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ResourcesSection } from "@/components/home/resources-section";

const startingPaths = [
  {
    href: "/curriculum",
    icon: Compass,
    title: "I need a roadmap",
    description: "See the main skills and how they fit together.",
    action: "Explore the path",
  },
  {
    href: "/resources",
    icon: BookOpen,
    title: "I need one good lesson",
    description: "Find a trusted resource for the topic in front of you.",
    action: "Choose a resource",
  },
  {
    href: "/projects",
    icon: Wrench,
    title: "I learn by building",
    description: "Pick a small project with a clear finish line.",
    action: "Browse projects",
  },
];

export function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <HeroSection />

      <section id="start" className="border-b border-zinc-200 bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-black uppercase tracking-wide text-emerald-800">
              Start here
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Choose the next step that feels right.
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              You do not need to learn everything before you begin.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {startingPaths.map((path) => {
              const Icon = path.icon;

              return (
                <Link
                  key={path.href}
                  href={path.href}
                  className="group rounded-lg border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-amber-400 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                >
                  <Icon className="size-6 text-emerald-800" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">{path.title}</h3>
                  <p className="mt-2 leading-7 text-zinc-600">{path.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-950">
                    {path.action}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CurriculumSection />
      <ResourcesSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
