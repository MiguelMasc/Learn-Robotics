import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[78svh] overflow-hidden bg-zinc-950 text-white"
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
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,23,21,0.9)_0%,rgba(14,23,21,0.62)_52%,rgba(14,23,21,0.12)_100%),linear-gradient(0deg,rgba(14,23,21,0.72)_0%,rgba(14,23,21,0.04)_58%)]" />

      <div className="mx-auto flex min-h-[70svh] max-w-7xl items-end px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-amber-300">
            Learn by building
          </p>
          <h1
            id="hero-title"
            className="text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl"
          >
            Build your first robot. Then make it smarter.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
            Follow small, practical projects and learn the math and code as you need them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#start"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber-300 px-6 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Find your starting point
              <ArrowDown className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/50 bg-white/10 px-6 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Browse projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 text-sm font-medium text-white/70">
            No experience required · Start in simulation · Go at your own pace
          </p>
        </div>
      </div>
    </section>
  );
}
