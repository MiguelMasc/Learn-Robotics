import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Cpu,
  FileText,
  GitBranch,
  HelpCircle,
  ListChecks,
  ShieldCheck,
  Target,
} from "lucide-react";

import { badgeClasses } from "@/components/home/badge-classes";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import {
  publishedProjects,
  type PublishedProject,
} from "@/data/site-content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return publishedProjects.map((project) => ({
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
      title: "Proposal not found | Learn Robotics",
    };
  }

  return {
    title: `${project.title} Proposal | Learn Robotics`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { proposal } = project;
  const relatedProjects = publishedProjects
    .filter((candidate) => candidate.slug !== project.slug)
    .slice(0, 2);

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
            Project proposals
          </Link>
          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            {project.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className={badgeClasses.secondary}>{project.level}</span>
            <span className={badgeClasses.outline}>{project.stage}</span>
          </div>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <nav
          aria-label="Proposal sections"
          className="mb-10 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm sm:flex sm:items-center sm:gap-5"
        >
          <span className="text-sm font-black uppercase tracking-wide text-zinc-500">
            Jump to
          </span>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 sm:mt-0">
            <a className="text-sm font-semibold hover:text-emerald-700" href="#overview">
              Overview
            </a>
            <a className="text-sm font-semibold hover:text-emerald-700" href="#readiness">
              Readiness checklist
            </a>
            <a className="text-sm font-semibold hover:text-emerald-700" href="#build-phases">
              Build phases
            </a>
            <a className="text-sm font-semibold hover:text-emerald-700" href="#references">
              Kits and references
            </a>
          </div>
        </nav>

        <div id="overview" className="grid scroll-mt-24 gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <ProposalBrief project={project} />
          <div className="grid gap-6">
            <ProposalStatement
              title="Proposed outcome"
              body={proposal.outcome}
            />
            <ProposalStatement
              title="Recommended platform"
              body={proposal.recommendedPlatform}
            />
          </div>
        </div>

        {project.proposal ? (
          <section className="mt-14" aria-labelledby="project-proposal">
            <div className="flex items-center gap-2">
              <FileText className="size-5 text-emerald-700" aria-hidden="true" />
              <h2 id="project-proposal" className="text-2xl font-black">
                Project proposal
              </h2>
            </div>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <ProposalBlock
                icon={FileText}
                title="Overview"
                items={project.proposal.overview}
              />
              <ProposalBlock
                icon={GitBranch}
                title="Repository boundary"
                items={project.proposal.repositoryBoundary}
              />
              <ProposalBlock
                icon={Cpu}
                title="Hardware plan"
                items={project.proposal.hardwarePlan}
              />
              <ProposalBlock
                icon={ClipboardList}
                title="Software plan"
                items={project.proposal.softwarePlan}
              />
              <ProposalBlock
                icon={ListChecks}
                title="Validation plan"
                items={project.proposal.validationPlan}
              />
              <ProposalBlock
                icon={AlertTriangle}
                title="Risks"
                items={project.proposal.risks}
              />
              <ProposalBlock
                icon={HelpCircle}
                title="Open decisions"
                items={project.proposal.openDecisions}
              />
            </div>
          </section>
        ) : null}

        {relatedProjects.length > 0 ? (
          <section className="mt-16 border-t border-zinc-200 pt-10" aria-labelledby="next-proposal">
            <SectionHeader
              id="next-proposal"
              title="The other current proposal"
              body="Compare the ground and aerial platforms before choosing where to invest your build time."
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/projects/${relatedProject.slug}`}
                  className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                >
                  <h3 className="text-xl font-black">{relatedProject.title}</h3>
                  <p className="mt-3 text-base leading-7 text-zinc-600">
                    {relatedProject.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    View proposal
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
  return publishedProjects.find((project) => project.slug === slug);
}

function ProposalBrief({ project }: { project: PublishedProject }) {
  return (
    <aside className="self-start rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-sm font-black uppercase tracking-wide text-zinc-700">
        Proposal brief
      </h2>
      <dl className="mt-5 divide-y divide-zinc-200">
        <div className="pb-5">
          <dt className="text-sm font-bold">Focus</dt>
          <dd className="mt-2 text-base leading-7 text-zinc-600">{project.focus}</dd>
        </div>
        <div className="pt-5">
          <dt className="text-sm font-bold">Final evidence</dt>
          <dd className="mt-2 text-base leading-7 text-zinc-600">{project.deliverable}</dd>
        </div>
      </dl>
    </aside>
  );
}

function ProposalStatement({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-black">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-600">{body}</p>
    </article>
  );
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-sm font-black uppercase tracking-wide text-zinc-700">{title}</h2>
      <ul className="mt-4 divide-y divide-zinc-200">
        {items.map((item) => (
          <li
            key={item}
            className="py-4 text-base leading-7 text-zinc-700 first:pt-0 last:pb-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
function ProposalBlock({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof CheckCircle2;
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-emerald-700" aria-hidden="true" />
        <h3 className="text-sm font-black uppercase tracking-normal text-zinc-700">{title}</h3>
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
