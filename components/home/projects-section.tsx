import { SectionHeading } from "@/components/home/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/site-content";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Follow-along projects"
        title="Projects that turn the curriculum into evidence."
        description="The project ladder starts with software-only builds, then moves into sensors, control loops, ROS 2, and integrated autonomy."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
