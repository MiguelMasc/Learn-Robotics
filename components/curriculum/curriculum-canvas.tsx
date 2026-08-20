"use client";

import { useMemo, useState } from "react";
import { Check, Route } from "lucide-react";
import { TopicModalGrid } from "@/components/curriculum/topic-modal-grid";
import type { CurriculumCourse } from "@/data/curriculum";
import { cn } from "@/lib/utils";

type Tone = keyof typeof tones;
type CourseNode = { courseIndex: number; column: number; row: number; tone: Tone };

const tones = {
  mechanical: { card: "border-amber-500 bg-amber-50 hover:bg-amber-100", tab: "bg-amber-500 text-zinc-950", dot: "bg-amber-500", label: "Mechanics + control" },
  electrical: { card: "border-cyan-600 bg-cyan-50 hover:bg-cyan-100", tab: "bg-cyan-600 text-white", dot: "bg-cyan-600", label: "Electronics" },
  software: { card: "border-blue-600 bg-blue-50 hover:bg-blue-100", tab: "bg-blue-600 text-white", dot: "bg-blue-600", label: "Software + systems" },
  autonomy: { card: "border-violet-600 bg-violet-50 hover:bg-violet-100", tab: "bg-violet-600 text-white", dot: "bg-violet-600", label: "Perception + autonomy" },
  integration: { card: "border-orange-600 bg-orange-50 hover:bg-orange-100", tab: "bg-orange-600 text-white", dot: "bg-orange-600", label: "Integration + testing" },
  human: { card: "border-fuchsia-600 bg-fuchsia-50 hover:bg-fuchsia-100", tab: "bg-fuchsia-600 text-white", dot: "bg-fuchsia-600", label: "Human factors" },
  readiness: { card: "border-emerald-700 bg-emerald-50 hover:bg-emerald-100", tab: "bg-emerald-700 text-white", dot: "bg-emerald-700", label: "Readiness + capstone" },
};

const nodes: CourseNode[] = [
  { courseIndex: 0, column: 0, row: 0, tone: "mechanical" }, { courseIndex: 1, column: 0, row: 1, tone: "electrical" }, { courseIndex: 6, column: 0, row: 2, tone: "software" },
  { courseIndex: 5, column: 1, row: 0, tone: "mechanical" }, { courseIndex: 2, column: 1, row: 1, tone: "autonomy" }, { courseIndex: 7, column: 1, row: 2, tone: "software" },
  { courseIndex: 3, column: 2, row: 0, tone: "autonomy" }, { courseIndex: 4, column: 2, row: 1, tone: "autonomy" }, { courseIndex: 8, column: 2, row: 2, tone: "software" },
  { courseIndex: 9, column: 3, row: 0, tone: "integration" }, { courseIndex: 10, column: 3, row: 1, tone: "integration" }, { courseIndex: 12, column: 3, row: 2, tone: "human" },
  { courseIndex: 11, column: 4, row: 0, tone: "readiness" }, { courseIndex: 13, column: 4, row: 1, tone: "readiness" },
];
const connections = [[0, 5], [0, 9], [1, 5], [1, 2], [6, 7], [5, 9], [2, 3], [2, 9], [7, 8], [7, 9], [3, 4], [4, 10], [8, 9], [9, 10], [9, 11], [10, 11], [10, 13], [12, 13], [11, 13]] as const;
const canvas = { width: 1360, height: 570, left: 36, top: 36, column: 267, row: 174, cardWidth: 216, cardHeight: 132 };

function pointFor(courseIndex: number, edge: "start" | "end") {
  const node = nodes.find((candidate) => candidate.courseIndex === courseIndex)!;
  const x = canvas.left + node.column * canvas.column;
  const y = canvas.top + node.row * canvas.row;
  return { x: edge === "start" ? x + canvas.cardWidth : x, y: y + canvas.cardHeight / 2 };
}

export function CurriculumCanvas({ courses }: { courses: CurriculumCourse[] }) {
  const [selectedId, setSelectedId] = useState(courses[0]?.id ?? "");
  const selectedCourse = useMemo(() => courses.find((course) => course.id === selectedId) ?? courses[0], [courses, selectedId]);
  const selectedIndex = courses.findIndex((course) => course.id === selectedCourse.id);
  const selectedNode = nodes.find((node) => node.courseIndex === selectedIndex) ?? nodes[0];
  const selectCourse = (course: CurriculumCourse) => {
    setSelectedId(course.id);
    requestAnimationFrame(() => document.getElementById("course-details")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return <div>
    <div className="mb-7 flex flex-col gap-5 border-y border-zinc-300 py-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3 text-sm font-bold text-zinc-700"><Route className="size-5 text-emerald-800" aria-hidden="true" />Follow the arrows, or choose any course to explore it.</div>
      <div className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Course domain legend">{Object.values(tones).map((tone) => <span key={tone.label} className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600"><span className={cn("size-2.5 rounded-full", tone.dot)} />{tone.label}</span>)}</div>
    </div>

    <div className="hidden overflow-x-auto pb-4 md:block">
      <div className="relative overflow-hidden border border-zinc-300 bg-[radial-gradient(circle_at_center,_#d4d4d8_1px,_transparent_1px)] bg-[length:22px_22px]" style={{ width: canvas.width, height: canvas.height }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/45 to-white/80" />
        <svg className="pointer-events-none absolute inset-0 z-10" viewBox={`0 0 ${canvas.width} ${canvas.height}`} aria-hidden="true">
          <defs><marker id="curriculum-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#52525b" /></marker></defs>
          {connections.map(([from, to]) => {
            const start = pointFor(from, "start"); const end = pointFor(to, "end"); const bend = Math.max(30, (end.x - start.x) * 0.5);
            return <path key={`${from}-${to}`} d={`M ${start.x} ${start.y} C ${start.x + bend} ${start.y}, ${end.x - bend} ${end.y}, ${end.x - 8} ${end.y}`} fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" markerEnd="url(#curriculum-arrow)" />;
          })}
        </svg>
        {nodes.map((node) => {
          const course = courses[node.courseIndex]; const tone = tones[node.tone]; const selected = course.id === selectedId;
          return <button key={course.id} type="button" onClick={() => selectCourse(course)} className={cn("absolute z-20 flex flex-col overflow-hidden border-2 text-left shadow-[4px_4px_0_0_#18181b] transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-zinc-950/25", tone.card, selected && "-translate-y-1 ring-4 ring-zinc-950/20")} style={{ left: canvas.left + node.column * canvas.column, top: canvas.top + node.row * canvas.row, width: canvas.cardWidth, height: canvas.cardHeight }} aria-pressed={selected}>
            <span className={cn("flex h-2 w-full items-center justify-end", tone.tab)}>{selected ? <Check className="mr-2 size-3.5 translate-y-3" aria-hidden="true" /> : null}</span>
            <span className="flex grow items-center px-3 text-[15px] font-black leading-[1.18]">{course.title}</span><span className="px-3 pb-3 text-[11px] font-bold text-zinc-600">{course.topics.length} topic modules</span>
          </button>;
        })}
      </div>
    </div>

    <div className="grid gap-3 md:hidden">
      {nodes.map((node) => {
        const course = courses[node.courseIndex]; const tone = tones[node.tone]; const selected = course.id === selectedId;
        return <button key={course.id} type="button" onClick={() => selectCourse(course)} className={cn("border-l-4 p-4 text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950", tone.card, selected && "ring-2 ring-zinc-950")} aria-pressed={selected}><span className="block text-base font-black leading-tight">{course.title}</span></button>;
      })}
    </div>

    <section id="course-details" className="mt-12 scroll-mt-28 border-t-4 border-zinc-950 pt-8" aria-live="polite">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
        <div><span className={cn("inline-block h-2 w-16", tones[selectedNode.tone].tab)} aria-hidden="true" />
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">{selectedCourse.title}</h2><p className="mt-4 text-lg font-medium leading-8 text-zinc-700">{selectedCourse.summary}</p><p className="mt-5 border-l-4 border-emerald-700 pl-4 text-base font-bold leading-7">{selectedCourse.emphasis}</p>
        </div>
        <div><p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-zinc-500">Choose a topic to open its learning resources</p><TopicModalGrid topics={selectedCourse.topics} /></div>
      </div>
    </section>
  </div>;
}
