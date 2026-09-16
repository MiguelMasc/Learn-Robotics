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
        <p className="lead">
          Small builds that bring the subjects together. Find a documented
          experiment, or explore a design that is still taking shape.
        </p>
        <section>
          <h2>Follow a published guide</h2>
          <p className="section-description">
            Free instructions from the original creators. Hardware costs vary;
            these builds have not been independently tested here.
          </p>
          <div className="build-grid">
            {builds
              .filter((b) => b.kind === "external")
              .map((b) => (
                <BuildCard key={b.id} build={b} />
              ))}
          </div>
        </section>
        <section>
          <h2>From the sketchbook</h2>
          <p className="section-description">
            Original, untested proposals. These are design briefs with open
            decisions, not finished build instructions.
          </p>
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
