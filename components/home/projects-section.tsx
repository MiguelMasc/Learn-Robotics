import { CircuitBoard, Map, Rocket, Wrench } from "lucide-react";

import { badgeClasses } from "@/components/home/badge-classes";
import { SectionHeading } from "@/components/home/section-heading";
import { projects } from "@/data/site-content";

export function ProjectsSection() {
  const iconMap = {
    Beginner: Wrench,
    Intermediate: CircuitBoard,
    Advanced: Map,
    Capstone: Rocket,
  };

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Follow-along projects"
        title="Projects that turn the curriculum into evidence."
        description="The project ladder starts with software-only builds, then moves into sensors, control loops, ROS 2, and integrated autonomy."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          const Icon = iconMap[project.level];

          return (
            <article
              key={project.title}
              className="rounded-lg border border-zinc-200 bg-white shadow-sm"
            >
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={
                      project.level === "Capstone" ? badgeClasses.accent : badgeClasses.secondary
                    }
                  >
                    {project.level}
                  </span>
                  <span className="grid size-10 place-items-center rounded-md bg-sky-100 text-sky-800">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-normal">
                  {project.title}
                </h3>
                <p className="text-base text-zinc-600">{project.summary}</p>
              </div>
              <div className="space-y-4 px-6 pb-6">
                <p className="text-sm text-zinc-600">
                  <span className="font-bold text-zinc-950">Focus:</span> {project.focus}
                </p>
                <p className="border-t border-zinc-200 pt-4 text-sm">
                  <span className="font-bold">Deliverable:</span> {project.deliverable}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
