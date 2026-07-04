import { CheckCircle2 } from "lucide-react";

import { badgeClasses } from "@/components/home/badge-classes";
import { SectionHeading } from "@/components/home/section-heading";
import { curriculumStages } from "@/data/site-content";

export function CurriculumSection() {
  return (
    <section id="curriculum" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Curriculum guide"
        title="A staged route from foundations to autonomous systems."
        description="Each stage balances theory, implementation, and build practice so the material compounds instead of becoming a list of disconnected courses."
      />

      <div className="grid gap-4 lg:grid-cols-4">
        {curriculumStages.map((stage) => (
          <article
            key={stage.id}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-3">
              <span className={badgeClasses.secondary}>{stage.label}</span>
              <h3 className="text-xl font-bold leading-tight tracking-normal">{stage.title}</h3>
              <p className="text-base text-zinc-600">{stage.summary}</p>
            </div>
            <div className="mt-5 space-y-5">
              <div>
                <p className="mb-2 text-sm font-bold">Topics</p>
                <div className="flex flex-wrap gap-2">
                  {stage.topics.map((topic) => (
                    <span key={topic} className={badgeClasses.outline}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-3">
                {stage.outcomes.map((outcome) => (
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
