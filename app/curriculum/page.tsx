import type { Metadata } from "next";
import { LearningPath } from "@/components/curriculum/learning-path";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { learningPathCourses } from "@/data/learning-path";

export const metadata: Metadata = {
  title: "Curriculum | Learn Robotics",
  description:
    "A prerequisite-driven map of 31 robotics courses synthesized from UCSC, CMU, and UPenn curricula.",
};

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <Header />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-emerald-800">
            The learning path
          </p>
          <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            Chart your path from first principles to a working robot.
          </h1>
          <div className="mt-6 grid max-w-5xl gap-4 text-lg font-medium leading-8 text-zinc-700 md:grid-cols-2 md:gap-10">
            <p>
              Thirty-one connected courses combine the undergraduate engineering base
              with graduate robotics depth from UCSC, CMU, and UPenn.
            </p>
            <p>
              There is no numbered order. Start at any entry point, then follow each
              course&apos;s prerequisite and unlock relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <LearningPath courses={learningPathCourses} />
      </section>
      <Footer />
    </main>
  );
}
