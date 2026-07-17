import { SectionHeading } from "@/components/home/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { publishedProjects } from "@/data/site-content";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        title="Start with a scoped build, a parts plan, and a measurable finish line."
        description="Only the proposals with complete phases, safety constraints, parts lists, and reference links are published here."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {publishedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
