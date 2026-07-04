import type { Metadata } from "next";
import { CheckCircle2, ClipboardCheck, Compass, Hammer } from "lucide-react";

import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { badgeClasses } from "@/components/home/badge-classes";
import { curriculumStages, projects } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Curriculum | Learn Robotics",
  description:
    "A deeper staged robotics curriculum from foundations through robot software, controls, perception, and capstone work.",
};

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className={badgeClasses.accent}>Curriculum</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            A practical path from first principles to autonomous robot systems.
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-zinc-600">
            The goal is not to collect courses. The goal is to build a sequence where math,
            programming, electronics, controls, sensing, and robot software reinforce each other.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Study with proof", "Each stage ends with visible checkpoints and build artifacts."],
              ["Build in layers", "Software simulations come first, then sensors, control, ROS 2, and autonomy."],
              ["Keep a log", "Measurements, failures, and decisions matter as much as the final demo."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
                <h2 className="text-base font-bold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {curriculumStages.map((stage) => {
            const relatedProjects = projects.filter((project) =>
              stage.title.toLowerCase().includes(project.stage.toLowerCase()),
            );

            return (
              <article
                key={stage.id}
                className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={badgeClasses.secondary}>{stage.label}</span>
                      <span className={badgeClasses.outline}>{stage.duration}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-black tracking-normal">{stage.title}</h2>
                    <p className="mt-3 text-base leading-7 text-zinc-600">{stage.summary}</p>
                    <p className="mt-4 border-l-4 border-amber-300 pl-4 text-sm leading-6 text-zinc-700">
                      {stage.emphasis}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {stage.topics.map((topic) => (
                        <span key={topic} className={badgeClasses.outline}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <StageList
                      icon={CheckCircle2}
                      title="Outcomes"
                      items={stage.outcomes}
                    />
                    <StageList
                      icon={ClipboardCheck}
                      title="Checkpoints"
                      items={stage.checkpoints}
                    />
                    <StageList icon={Compass} title="Practice loop" items={stage.practice} />
                    <StageList
                      icon={Hammer}
                      title="Related projects"
                      items={
                        relatedProjects.length > 0
                          ? relatedProjects.map((project) => project.title)
                          : ["Use the previous stage projects as review before moving on."]
                      }
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}

function StageList({
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
        <h3 className="text-sm font-black uppercase tracking-normal text-zinc-700">{title}</h3>
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
