"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { ArrowRight, GitBranch, LockKeyhole, Route } from "lucide-react";

import type { LearningPathCourse, LearningPathLevel } from "@/data/learning-path";
import { cn } from "@/lib/utils";

const levels: LearningPathLevel[] = ["Foundation", "Intermediate", "Advanced"];

const areaTone: Record<LearningPathCourse["area"], string> = {
  Mathematics: "border-blue-600 bg-blue-50",
  Computing: "border-violet-600 bg-violet-50",
  "Physics & Electronics": "border-amber-600 bg-amber-50",
  "Robot Design": "border-orange-600 bg-orange-50",
  "Sensing & Perception": "border-emerald-700 bg-emerald-50",
  "Planning, Learning & Control": "border-rose-700 bg-rose-50",
  Interaction: "border-fuchsia-700 bg-fuchsia-50",
  "Integration & Research": "border-zinc-700 bg-zinc-100",
};

export function LearningPath({ courses }: { courses: LearningPathCourse[] }) {
  const [selectedId, setSelectedId] = useState(courses[0]?.id ?? "");
  const byId = useMemo(() => new Map(courses.map((course) => [course.id, course])), [courses]);
  const selected = byId.get(selectedId) ?? courses[0];
  const unlocks = useMemo(
    () => courses.filter((course) => course.prerequisites.includes(selected?.id ?? "")),
    [courses, selected?.id],
  );

  if (!selected) return null;

  const choose = (id: string) => {
    setSelectedId(id);
    requestAnimationFrame(() =>
      document.getElementById("learning-path-details")?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };

  const prerequisites = selected.prerequisites.flatMap((id) => {
    const course = byId.get(id);
    return course ? [course] : [];
  });

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 border-y border-zinc-300 py-5 lg:flex-row lg:items-center lg:justify-between">
        <p className="flex items-center gap-3 text-sm font-bold text-zinc-700">
          <Route className="size-5 text-emerald-800" aria-hidden="true" />
          Start with any unlocked course. Prerequisites—not course numbers—define the path.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-bold text-zinc-600">
          <span>{courses.filter((course) => course.prerequisites.length === 0).length} entry points</span>
          <span>{courses.length} courses</span>
          <span>{courses.reduce((total, course) => total + course.prerequisites.length, 0)} prerequisite links</span>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {levels.map((level) => (
          <section key={level} aria-labelledby={`level-${level}`} className="border border-zinc-300 bg-white">
            <header className="border-b border-zinc-300 bg-zinc-950 px-5 py-4 text-white">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">Dependency band</p>
              <h2 id={`level-${level}`} className="mt-1 text-2xl font-black">{level}</h2>
            </header>
            <div className="grid gap-3 p-4">
              {courses.filter((course) => course.level === level).map((course) => {
                const isSelected = course.id === selected.id;
                const isRequired = selected.prerequisites.includes(course.id);
                const isUnlocked = course.prerequisites.includes(selected.id);

                return (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => choose(course.id)}
                    aria-pressed={isSelected}
                    className={cn(
                      "border-l-4 p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-zinc-950/20",
                      areaTone[course.area],
                      isSelected && "ring-4 ring-zinc-950/20",
                      (isRequired || isUnlocked) && "shadow-[3px_3px_0_0_#18181b]",
                    )}
                  >
                    <span className="text-[11px] font-black uppercase tracking-wider text-zinc-600">{course.area}</span>
                    <span className="mt-1 block text-base font-black leading-tight text-zinc-950">{course.title}</span>
                    <span className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold text-zinc-600">
                      {course.prerequisites.length === 0
                        ? "Entry point"
                        : `${course.prerequisites.length} prerequisite${course.prerequisites.length === 1 ? "" : "s"}`}
                      {isRequired ? <span className="text-emerald-800">Required by selection</span> : null}
                      {isUnlocked ? <span className="text-rose-800">Unlocked next</span> : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section id="learning-path-details" className="mt-12 scroll-mt-28 border-t-4 border-zinc-950 pt-8" aria-live="polite">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-800">
              {selected.level} · {selected.area}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{selected.title}</h2>
            <p className="mt-4 text-lg font-medium leading-8 text-zinc-700">{selected.summary}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <RelationshipList
              icon={<LockKeyhole className="size-5" aria-hidden="true" />}
              title="Prerequisites"
              empty="No prerequisites—start here."
              courses={prerequisites}
              onChoose={choose}
            />
            <RelationshipList
              icon={<GitBranch className="size-5" aria-hidden="true" />}
              title="Unlocks"
              empty="This is a terminal specialization or portfolio course."
              courses={unlocks}
              onChoose={choose}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function RelationshipList({
  icon,
  title,
  empty,
  courses,
  onChoose,
}: {
  icon: ReactNode;
  title: string;
  empty: string;
  courses: LearningPathCourse[];
  onChoose: (id: string) => void;
}) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-lg font-black">{icon}{title}</h3>
      {courses.length === 0 ? (
        <p className="mt-3 text-sm font-medium leading-6 text-zinc-600">{empty}</p>
      ) : (
        <div className="mt-3 border-b border-zinc-300">
          {courses.map((course) => (
            <button
              key={course.id}
              type="button"
              onClick={() => onChoose(course.id)}
              className="group flex w-full items-center justify-between gap-3 border-t border-zinc-300 py-3 text-left text-sm font-bold hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            >
              {course.title}
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
