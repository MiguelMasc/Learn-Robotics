import type { Metadata } from "next";
import { Shell } from "@/components/atlas/site-shell";
import { BuildCard } from "@/components/atlas/build-card";
import builds from "@/data/builds.json";
export const metadata: Metadata = { title: "Build guides" };
export default function Projects() {
  return (
    <Shell>
      <div className="shell collection-page">
        <h1>Put an idea in motion.</h1>
        <section>
          <h2>Follow a published guide</h2>
          <div className="build-grid">
            {builds
              .filter((b) => b.kind === "external")
              .map((b) => (
                <BuildCard key={b.id} build={b} />
              ))}
          </div>
        </section>
        <section>
          <h2>Untested build ideas</h2>
          <div className="build-grid">
            {builds
              .filter((b) => b.kind === "proposal")
              .map((b) => (
                <BuildCard key={b.id} build={b} />
              ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
