import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Shell } from "@/components/atlas/site-shell";
import { resources, findTopic } from "@/data/atlas";
import builds from "@/data/builds.json";
export function generateStaticParams() {
  return builds.map((b) => ({ slug: b.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: builds.find((b) => b.id === slug)?.title ?? "Build not found",
  };
}
export default async function BuildPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const build = builds.find((b) => b.id === slug);
  if (!build) notFound();
  const source = resources[build.source];
  return (
    <Shell>
      <article className="shell detail-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/projects">Build guides</Link>
          <span>/</span>
          <span>{build.title}</span>
        </nav>
        <div className="detail-heading">
          <h1>{build.title}</h1>
        </div>
        <div className="detail-columns">
          <div>
            <section>
              <h2>What you can explore</h2>
              <p>{build.outcome}</p>
            </section>
            <section>
              <h2>
                {build.kind === "external"
                  ? "Before you begin"
                  : "Proposed equipment"}
              </h2>
              <ul className="equipment-list">
                {build.equipment.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="small-note">
                The reading is free. Physical components are purchased
                separately; there is no fixed shopping list price.
              </p>
            </section>
            <section>
              <h2>
                {build.kind === "external"
                  ? "Inside the guide"
                  : "Development checkpoints"}
              </h2>
              <ol className="stage-list">
                {build.stages.map(([title, body], i) => (
                  <li key={title}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h2>Questions to take with you</h2>
              <ul className="equipment-list">
                {build.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </section>
          </div>
          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h2>
                {build.kind === "external"
                  ? "The original instructions"
                  : "Supporting reference"}
              </h2>
              <p>
                {build.kind === "external"
                  ? "Use the publisher’s complete instructions for wiring, software and component requirements. This overview has not been independently built or verified here."
                  : "This source informs the design direction. It is not a validated implementation of this proposal."}
              </p>
              <a
                className="button primary"
                href={source.url}
                target="_blank"
                rel="noreferrer"
              >
                {source.publisher}
                <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="sidebar-card">
              <h2>Connected subjects</h2>
              <div className="related-links">
                {build.topics.map((id) => (
                  <Link key={id} href={`/topics/${id}`}>
                    {findTopic(id)!.title} →
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </Shell>
  );
}
