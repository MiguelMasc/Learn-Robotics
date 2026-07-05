import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock3,
  ShieldCheck,
  Target,
} from "lucide-react";

import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { badgeClasses } from "@/components/home/badge-classes";
import { projects } from "@/data/site-content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Learn Robotics",
    };
  }

  return {
    title: `${project.title} | Learn Robotics`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((candidate) => candidate.stage === project.stage && candidate.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-zinc-300 bg-white px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Projects
          </Link>
          <div className="mt-8 flex flex-wrap gap-2">
            <span
              className={
                project.level === "Capstone" ? badgeClasses.accent : badgeClasses.secondary
              }
            >
              {project.level}
            </span>
            <span className={badgeClasses.outline}>{project.stage}</span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.35fr]">
          <aside className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Target className="size-5 text-emerald-700" aria-hidden="true" />
              <h2 className="text-sm font-black uppercase tracking-normal text-zinc-700">
                Build brief
              </h2>
            </div>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-sm font-bold text-zinc-950">Focus</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-600">{project.focus}</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-zinc-950">Deliverable</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-600">{project.deliverable}</dd>
              </div>
            </dl>
          </aside>

          <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <DetailBlock
              icon={CheckCircle2}
              title="Learning goals"
              items={project.learningGoals}
            />
            <DetailBlock icon={Clock3} title="Milestones" items={project.milestones} />
            <DetailBlock
              icon={ShieldCheck}
              title="Constraints to respect"
              items={project.constraints}
            />
          </section>
        </div>

        {relatedProjects.length > 0 ? (
          <section className="mt-14" aria-labelledby="related-projects">
            <div className="flex items-center gap-2">
              <ClipboardList className="size-5 text-emerald-700" aria-hidden="true" />
              <h2 id="related-projects" className="text-2xl font-black">
                Related projects
              </h2>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/projects/${relatedProject.slug}`}
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                >
                  <span
                    className={
                      relatedProject.level === "Capstone"
                        ? badgeClasses.accent
                        : badgeClasses.secondary
                    }
                  >
                    {relatedProject.level}
                  </span>
                  <h3 className="mt-4 text-lg font-bold leading-tight tracking-normal">
                    {relatedProject.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {relatedProject.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950">
                    Open project
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </section>
      <Footer />
    </main>
  );
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function DetailBlock({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof CheckCircle2;
  title: string;
  items: string[];
}) {
  return (
    <section className="border-t border-zinc-200 pt-6 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-emerald-700" aria-hidden="true" />
        <h2 className="text-sm font-black uppercase tracking-normal text-zinc-700">{title}</h2>
      </div>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-zinc-600">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
