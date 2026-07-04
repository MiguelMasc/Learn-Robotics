import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden bg-zinc-950 text-white"
      aria-labelledby="hero-title"
    >
      <Image
        src="/images/robotics-learning-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,23,21,0.88)_0%,rgba(14,23,21,0.66)_48%,rgba(14,23,21,0.16)_100%),linear-gradient(0deg,rgba(14,23,21,0.78)_0%,rgba(14,23,21,0.06)_54%)]" />

      <div className="mx-auto flex min-h-[78svh] max-w-7xl items-end px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1
            id="hero-title"
            className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl"
          >
            Build the math, code, hardware, and systems instincts behind real robots.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
            A practical curriculum guide that pairs core theory with trusted resources and
            follow-along projects from first simulations to ROS 2, controls, sensing, and autonomy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/curriculum"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber-300 px-6 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              View curriculum
              <BookOpenCheck className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/50 bg-white/10 px-6 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Start a project
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <dl className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ["4", "learning stages"],
              ["20", "core topics"],
              ["7", "starter projects"],
            ].map(([value, label]) => (
              <div key={label} className="border-l-4 border-amber-300 pl-4">
                <dt className="text-4xl font-black leading-none">{value}</dt>
                <dd className="mt-2 text-sm font-medium text-white/75">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
