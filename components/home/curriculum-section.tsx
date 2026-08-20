import { SectionHeading } from "@/components/home/section-heading";
import { curriculumPillars } from "@/data/site-content";

export function CurriculumSection() {
  const subjects = curriculumPillars.filter(
    (pillar) => pillar.label === "Hardware & engineering foundations",
  );
  const focuses = curriculumPillars.filter(
    (pillar) => pillar.label === "Functional & architectural",
  );

  return (
    <section id="curriculum" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        title="Three core subjects. Four robot focuses."
        description="Build the engineering foundations, then apply them to the capabilities that make a robot useful."
      />

      <div className="space-y-14">
        <div>
          <div className="mb-5 flex items-baseline gap-3 border-b border-zinc-950 pb-3">
            <p className="text-sm font-black uppercase tracking-wider text-emerald-800">
              Core subjects
            </p>
            <p className="text-sm font-medium text-zinc-500">The engineering you learn</p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-3">
            {subjects.map((subject) => (
              <article key={subject.id} className="border-t border-zinc-300 py-7 md:border-t-0">
                <h3 className="text-xl font-bold leading-tight tracking-normal">{subject.title}</h3>
                <p className="mt-2 text-base font-bold leading-6 text-emerald-800">
                  {subject.question}
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-zinc-500">
                  {subject.topics.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-baseline gap-3 border-b border-zinc-950 pb-3">
            <p className="text-sm font-black uppercase tracking-wider text-emerald-800">
              Robot focuses
            </p>
            <p className="text-sm font-medium text-zinc-500">The capabilities you build</p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-4">
            {focuses.map((focus) => (
              <article key={focus.id} className="border-t border-zinc-300 py-7 md:border-t-0">
                <h3 className="text-xl font-bold leading-tight tracking-normal">{focus.title}</h3>
                <p className="mt-2 text-base font-bold leading-6 text-emerald-800">
                  {focus.question}
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-zinc-500">
                  {focus.topics.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
