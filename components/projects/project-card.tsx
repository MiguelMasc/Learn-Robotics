"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import {
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";

import { badgeClasses } from "@/components/home/badge-classes";
import type { Project } from "@/data/site-content";

export function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleId = `${project.slug}-card-title`;
  const modalTitleId = `${project.slug}-modal-title`;

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLElement>) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal();
    }
  }

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      <article
        aria-haspopup="dialog"
        aria-labelledby={titleId}
        className="group cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-colors hover:border-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
        onClick={openModal}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className="flex flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 id={titleId} className="text-xl font-bold leading-tight tracking-normal">
              {project.title}
            </h3>
            <Maximize2 className="mt-1 size-5 shrink-0 text-zinc-500" aria-hidden="true" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={
                project.level === "Capstone" ? badgeClasses.accent : badgeClasses.secondary
              }
            >
              {project.level}
            </span>
            <span className={badgeClasses.outline}>{project.stage}</span>
          </div>
          <p className="max-w-2xl text-base leading-7 text-zinc-600">{project.summary}</p>
        </div>

        <div className="space-y-5 px-6 pb-6">
          <dl className="divide-y divide-zinc-200 rounded-md bg-zinc-50 px-4">
            <div className="py-3">
              <dt className="text-xs font-black uppercase tracking-wide text-zinc-500">Focus</dt>
              <dd className="mt-1 text-sm leading-6 text-zinc-700">{project.focus}</dd>
            </div>
            <div className="py-3">
              <dt className="text-xs font-black uppercase tracking-wide text-zinc-500">
                Final evidence
              </dt>
              <dd className="mt-1 text-sm leading-6 text-zinc-700">{project.deliverable}</dd>
            </div>
          </dl>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            onClick={(event) => event.stopPropagation()}
          >
            View proposal
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </article>

      {isModalOpen ? (
        <div
          aria-labelledby={modalTitleId}
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/70 px-4 py-6"
          onClick={closeModal}
          role="dialog"
        >
          <div
            className="max-h-[calc(100svh-3rem)] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-zinc-200 bg-white px-6 py-5">
              <div>
                <h3
                  id={modalTitleId}
                  className="text-2xl font-black leading-tight tracking-normal"
                >
                  {project.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
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
                <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
                  {project.summary}
                </p>
              </div>
              <button
                aria-label="Close project details"
                className="grid size-10 shrink-0 place-items-center rounded-md border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                onClick={closeModal}
                type="button"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-5 px-6 py-5">
              <dl className="grid overflow-hidden rounded-md border border-zinc-200 bg-zinc-50 md:grid-cols-2 md:divide-x md:divide-zinc-200">
                <div className="p-4">
                  <dt className="text-xs font-black uppercase tracking-wide text-zinc-500">
                    Focus
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-700">{project.focus}</dd>
                </div>
                <div className="border-t border-zinc-200 p-4 md:border-t-0">
                  <dt className="text-xs font-black uppercase tracking-wide text-zinc-500">
                    Final evidence
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-zinc-700">
                    {project.deliverable}
                  </dd>
                </div>
              </dl>

              <div className="divide-y divide-zinc-200 border-y border-zinc-200">
                <ProjectDetailList title="Learning goals" items={project.learningGoals} />
                <ProjectDetailList title="Milestones" items={project.milestones} />
                <ProjectDetailList title="Constraints" items={project.constraints} />
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-amber-300 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                onClick={closeModal}
              >
                Open full proposal
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ProjectDetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="py-5 first:pt-0 last:pb-0">
      <h4 className="text-sm font-black uppercase tracking-normal text-zinc-700">{title}</h4>
      <ul className="mt-3 divide-y divide-zinc-200">
        {items.map((item) => (
          <li key={item} className="py-2 text-sm leading-6 text-zinc-600 first:pt-0 last:pb-0">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
