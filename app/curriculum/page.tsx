import type { Metadata } from "next";
import { TopicModalGrid } from "@/components/curriculum/topic-modal-grid";
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
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            A robotics curriculum built from real courses.
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-zinc-700">
            Fourteen courses connect mechanics, electronics, autonomy, software, integration,
            safety, and a complete capstone. Every sub-topic includes at least four focused
            chapters, lessons, standards, papers, or documentation pages.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          {curriculumCourses.map((course, index) => (
            <article
              key={course.id}
              className="border-b border-zinc-300 py-12 sm:py-16"
            >
              <p className="mb-3 text-sm font-black uppercase tracking-wider text-emerald-800">
                Course {index + 1}
              </p>
              <h2 className="max-w-4xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">
                {course.title}
              </h2>
              <p className="mt-4 max-w-4xl text-lg font-medium leading-8 text-zinc-700">
                {course.summary}
              </p>
              <p className="mt-5 max-w-4xl text-base font-bold leading-7 text-zinc-900">
                {course.emphasis}
              </p>

              <div className="mt-8">
                <TopicModalGrid topics={course.topics} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
