import { ResourceTabs } from "@/components/filter-tabs";
import { SectionHeading } from "@/components/home/section-heading";

export function ResourcesSection() {
  return (
    <section id="resources" className="border-y border-zinc-200 bg-emerald-50/70">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Top resources"
          title="A curated shelf for each part of the stack."
          description="These links favor free or widely used materials that can anchor an independent study plan."
        />
        <ResourceTabs />
      </div>
    </section>
  );
}
