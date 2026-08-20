import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ResourceTabs } from "@/components/filter-tabs";
import { SectionHeading } from "@/components/home/section-heading";

export function ResourcesSection() {
  return (
    <section id="resources" className="border-y border-zinc-200 bg-emerald-50/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Use one good resource at a time."
          description="Choose the topic you need now. The rest will still be here later."
        />
        <ResourceTabs limit={3} />
        <Link
          href="/resources"
          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
        >
          Browse all resources
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
