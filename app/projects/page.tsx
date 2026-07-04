import type { Metadata } from "next";
import { CheckCircle2, Clock3, Gauge, Route, Wrench } from "lucide-react";

import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { badgeClasses } from "@/components/home/badge-classes";
import { projects } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Projects | Learn Robotics",
  description:
    "A robotics project ladder with deeper build goals, constraints, milestones, and deliverables.",
};

const levelOrder = ["Beginner", "Intermediate", "Advanced", "Capstone"] as const;

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className={badgeClasses.accent}>Projects</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            Build proof that you understand the robot stack.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-zinc-600">
            These projects are ordered to turn theory into evidence: first simulations, then
            sensors and motors, then feedback control, robot software, autonomy, and integration.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <PrincipleCard
              icon={Gauge}
              title="Constrain the first version"
              body="A small working robot teaches more than an ambitious pile of parts that never stabilizes."
            />
            <PrincipleCard
              icon={Route}
              title="Make progress visible"
              body="Every milestone should produce a diagram, plot, log, photo, short video, or working demo."
            />
            <PrincipleCard
              icon={Wrench}
              title="Debug across layers"
              body="Mechanical, electrical, and software issues blend together, so projects include checks and constraints."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {levelOrder.map((level) => {
            const levelProjects = projects.filter((project) => project.level === level);

            return (
              <section key={level} aria-labelledby={`${level.toLowerCase()}-projects`}>
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 id={`${level.toLowerCase()}-projects`} className="text-2xl font-black">
                      {level}
                    </h2>
                    <p className="mt-2 text-base text-zinc-600">
                      {level === "Beginner"
                        ? "Start here: build motion, sensing, power, and debugging instincts."
                        : "Use this tier once the earlier projects feel repeatable and explainable."}
                    </p>
                  </div>
                  <span className={level === "Capstone" ? badgeClasses.accent : badgeClasses.secondary}>
                    {levelProjects.length} project{levelProjects.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="grid gap-4 xl:grid-cols-2">
                  {levelProjects.map((project) => (
                    <article
                      key={project.slug}
                      className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={
                            project.level === "Capstone"
                              ? badgeClasses.accent
                              : badgeClasses.secondary
                          }
                        >
                          {project.level}
                        </span>
                        <span className={badgeClasses.outline}>{project.stage}</span>
                      </div>
                      <h3 className="mt-4 text-2xl font-black tracking-normal">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-zinc-600">{project.summary}</p>
                      <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <ProjectList
                          icon={CheckCircle2}
                          title="Learning goals"
                          items={project.learningGoals}
                        />
                        <ProjectList
                          icon={Clock3}
                          title="Milestones"
                          items={project.milestones}
                        />
                      </div>
                      <div className="mt-5 rounded-lg bg-zinc-50 p-5">
                        <h4 className="text-sm font-black uppercase tracking-normal text-zinc-700">
                          Constraints to respect
                        </h4>
                        <ul className="mt-3 grid gap-2 md:grid-cols-3">
                          {project.constraints.map((constraint) => (
                            <li key={constraint} className="text-sm leading-6 text-zinc-600">
                              {constraint}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="mt-5 border-t border-zinc-200 pt-4 text-sm">
                        <span className="font-bold">Deliverable:</span> {project.deliverable}
                      </p>
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

function PrincipleCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Gauge;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
      <Icon className="size-5 text-emerald-700" aria-hidden="true" />
      <h2 className="mt-4 text-base font-bold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
    </article>
  );
}

function ProjectList({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof CheckCircle2;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-emerald-700" aria-hidden="true" />
        <h4 className="text-sm font-black uppercase tracking-normal text-zinc-700">{title}</h4>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-zinc-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
