import type { Metadata } from "next";
import { CurriculumCanvas } from "@/components/curriculum/curriculum-canvas";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { curriculumCourses } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "Curriculum | Learn Robotics",
  description:
    "A practical robotics curriculum organized as 14 common university courses, with chapter-level sources for every sub-topic.",
};

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <Header />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-emerald-800">The learning map</p>
          <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">Chart your path from first principles to a working robot.</h1>
          <div className="mt-6 grid max-w-5xl gap-4 text-lg font-medium leading-8 text-zinc-700 md:grid-cols-2 md:gap-10">
            <p>Fourteen connected courses build mechanics, electronics, autonomy, software, integration, and safety into one complete engineering practice.</p>
            <p>The arrows show a recommended route, not a locked sequence. Pick any course to inspect its topics and open focused learning resources.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <CurriculumCanvas courses={curriculumCourses} />
      </section>
      <Footer />
    </main>
  );
}
