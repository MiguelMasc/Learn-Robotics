import { CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/home/section-heading";
import { curriculumPillars } from "@/data/site-content";

export function CurriculumSection() {
  return (
    <section id="curriculum" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        title="Robotics is built on six connected pillars."
        description="Each pillar is an enduring subject area. Learn within a pillar, then integrate across them in complete robot systems."
      />

      <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        {curriculumPillars.map((pillar) => (
          <article
            key={pillar.id}
            className="border-t border-zinc-300 py-8"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold leading-tight tracking-normal">
                {pillar.title}
              </h3>
              <p className="text-base font-medium leading-7 text-zinc-700">{pillar.summary}</p>
            </div>
            <div className="mt-5 space-y-5">
              <p className="text-sm font-semibold leading-6 text-zinc-500">
                {pillar.topics.map((topic) => topic.name).join(", ")}
              </p>
              <ul className="space-y-3">
                {pillar.outcomes.slice(0, 2).map((outcome) => (
                  <li key={outcome} className="flex gap-2 text-sm">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
