import { CurriculumSection } from "@/components/home/curriculum-section";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ResourcesSection } from "@/components/home/resources-section";

export function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      <HeroSection />
      <CurriculumSection />
      <ResourcesSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
