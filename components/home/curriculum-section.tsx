import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { curriculumPillars } from "@/data/site-content";

export function CurriculumSection() {
  return (
    <section id="curriculum" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title="See the whole field, one piece at a time."
        description="Start with the part your project needs. Open a pillar when you want the details."
      />

      <div className="grid gap-x-8 md:grid-cols-2">
        {curriculumPillars.map((pillar) => (
          <details
            key={pillar.id}
            className="group border-t border-zinc-300 py-1"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="text-xs font-black uppercase tracking-wide text-emerald-800">
                  {pillar.label}
                </span>
                <span className="mt-2 block text-xl font-bold leading-tight">
                  {pillar.title}
                </span>
                <span className="mt-2 block max-w-xl text-sm leading-6 text-zinc-600">
                  {pillar.summary}
                </span>
              </span>
              <ChevronDown
                className="mt-1 size-5 shrink-0 text-zinc-500 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>

            <div className="pb-7">
              <p className="text-xs font-black uppercase tracking-wide text-zinc-500">
                Topics
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {pillar.topics.map((topic) => (
                  <span
                    key={topic.name}
                    className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-semibold text-zinc-700"
                  >
                    {topic.name}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-3">
                {pillar.outcomes.slice(0, 2).map((outcome) => (
                  <li key={outcome} className="flex gap-2 text-sm leading-6">
                    <CheckCircle2
                      className="mt-1 size-4 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>

      <Link
        href="/curriculum"
        className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
      >
        See the complete curriculum
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </section>
  );
}
