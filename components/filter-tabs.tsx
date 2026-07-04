"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";

import { resources, type Resource } from "@/data/site-content";

const resourceFilters: Array<{
  label: string;
  value: "all" | Resource["category"];
}> = [
  { label: "All", value: "all" },
  { label: "Foundations", value: "foundation" },
  { label: "Robotics", value: "robotics" },
  { label: "AI", value: "ai" },
];

const badgeBase =
  "inline-flex w-fit items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-normal";

export function ResourceTabs() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof resourceFilters)[number]["value"]>("all");

  const visibleResources = useMemo(() => {
    if (activeFilter === "all") {
      return resources;
    }

    return resources.filter((resource) => resource.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-5">
      <div
        className="flex w-fit max-w-full flex-wrap gap-1 rounded-lg border border-zinc-200 bg-white/80 p-1"
        aria-label="Filter resources by topic"
      >
        {resourceFilters.map((filter) => (
          <button
            key={filter.value}
            className={`min-h-10 rounded-md px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
              activeFilter === filter.value
                ? "bg-zinc-950 text-white"
                : "text-zinc-600 hover:text-zinc-950"
            }`}
            type="button"
            aria-pressed={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {visibleResources.map((resource) => (
          <article
            key={resource.title}
            className="rounded-lg border border-zinc-200 bg-white shadow-sm"
          >
            <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className={`${badgeBase} border-transparent bg-emerald-100 text-emerald-950`}>
                    {resource.type}
                  </span>
                  <span className={`${badgeBase} border-zinc-300 text-zinc-700`}>
                    {resource.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight tracking-normal">
                  {resource.title}
                </h3>
                <p className="max-w-3xl text-base text-zinc-600">
                  {resource.description}
                </p>
              </div>
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-9 w-full items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 sm:w-auto"
              >
                Open
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
