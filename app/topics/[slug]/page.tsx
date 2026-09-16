import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Shell } from "@/components/atlas/site-shell";
import { ResourceCard } from "@/components/atlas/resource-card";
import { BuildCard } from "@/components/atlas/build-card";
import {
  subjects,
  topics,
  resources,
  findSubject,
  findTopic,
} from "@/data/atlas";
import builds from "@/data/builds.json";
export function generateStaticParams() {
  return [...subjects, ...topics].map((t) => ({ slug: t.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = findSubject(slug) ?? findTopic(slug);
  return {
    title: item?.title ?? "Topic not found",
    description: item?.description,
  };
}
export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subject = findSubject(slug);
  const topic = findTopic(slug);
  if (!subject && !topic) notFound();
  const entry = subject ?? topic!;
  const parent = subject ?? findSubject(topic!.subject)!;
  const children = subject
    ? topics.filter((t) => t.subject === subject.id)
    : [];
  const ids = topic?.resources ?? [
    ...new Set(children.flatMap((t) => t.resources)),
  ];
  const intro = resources[subject?.orientation ?? topic!.orientation];
  const matching = builds
    .filter((b) =>
      b.topics.some((id) => id === slug || children.some((t) => t.id === id)),
    )
    .slice(0, 2);
  return (
    <Shell>
      <article className="shell detail-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/#explore">Explore</Link>
          <span>/</span>
          {topic && (
            <>
              <Link href={`/topics/${parent.id}`}>{parent.title}</Link>
              <span>/</span>
            </>
          )}
          <span>{entry.title}</span>
        </nav>
        <div
          className="detail-heading subject-heading"
          style={{ "--subject-color": parent.color } as React.CSSProperties}
        >
          <h1>{entry.title}</h1>
          <p className="lead">{entry.description}</p>
        </div>
        <div className="detail-columns">
          <div>
            {subject && (
              <section>
                <h2>Explore this subject</h2>
                <div className="subject-topic-list">
                  {children.map((t) => (
                    <Link key={t.id} href={`/topics/${t.id}`}>
                      <h3>
                        {t.title}
                        <ArrowRight size={19} />
                      </h3>
                      <p>{t.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
            <section id="resources">
              <h2>A few good starting points</h2>
              <div className="resource-list">
                {ids.slice(0, 3).map((id) => (
                  <ResourceCard key={id} id={id} />
                ))}
              </div>
              {ids.length > 3 && (
                <details className="more-resources">
                  <summary>
                    Explore {ids.length - 3} more{" "}
                    {ids.length - 3 === 1 ? "resource" : "resources"}
                  </summary>
                  {ids.slice(3).map((id) => (
                    <ResourceCard key={id} id={id} />
                  ))}
                </details>
              )}
            </section>
            {topic ? (
              <section>
                <h2>Where this field is going</h2>
                <div className="field-context">
                  <div>
                    <h3>Established uses</h3>
                    <p>{topic.established}</p>
                    <a
                      href={resources[topic.establishedSource].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore an example ↗
                    </a>
                  </div>
                  <div>
                    <h3>Research directions</h3>
                    <p>{topic.research}</p>
                    <a
                      href={resources[topic.researchSource].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {resources[topic.researchSource].title} ↗
                    </a>
                  </div>
                  <div className="open-question">
                    <h3>An open question</h3>
                    <p>{topic.question}</p>
                  </div>
                </div>
              </section>
            ) : (
              <section>
                <h2>From established ideas to open questions</h2>
                <p>
                  Each topic above includes practical uses, a research direction
                  and a question to investigate. Explore the connection between
                  what works in a controlled experiment and what remains
                  difficult in the world.
                </p>
              </section>
            )}
            {matching.length > 0 && (
              <section>
                <h2>See it in a build</h2>
                <div className="build-grid compact-builds">
                  {matching.map((b) => (
                    <BuildCard key={b.id} build={b} />
                  ))}
                </div>
              </section>
            )}
          </div>
          <aside className="detail-sidebar">
            <div className="sidebar-card orientation-card">
              <h2>Get your bearings</h2>
              <p>
                {intro.description} {intro.assumes}.
              </p>
              <a
                className="button primary"
                href={intro.url}
                target="_blank"
                rel="noreferrer"
              >
                Open the orientation
                <ArrowUpRight size={17} />
              </a>
            </div>
            {topic && topic.foundations.length > 0 && (
              <div className="sidebar-card">
                <h2>Fill in a gap</h2>
                <p>Dip into the math or physics when you need it.</p>
                <div className="related-links">
                  {topic.foundations.map((id) => (
                    <a
                      key={id}
                      href={resources[id].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {resources[id].title}
                      <ArrowUpRight size={15} />
                    </a>
                  ))}
                </div>
              </div>
            )}
            <div className="sidebar-card">
              <h2>Keep exploring</h2>
              <div className="related-links">
                {(topic
                  ? topic.related
                  : subjects
                      .filter((s) => s.id !== subject!.id)
                      .map((s) => s.id)
                ).map((id) => (
                  <Link key={id} href={`/topics/${id}`}>
                    {(findTopic(id) ?? findSubject(id))!.title}
                    <ArrowRight size={15} />
                  </Link>
                ))}
                <Link href="/#explore">
                  Return to the map <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </Shell>
  );
}
