import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Shell } from "@/components/atlas/site-shell";
import { stages, tracks } from "@/data/journey";
import { subjects, topics, findTopic, resources } from "@/data/atlas";
export const metadata: Metadata = {
  title: "From high school to a master’s in robotics",
  description:
    "A complete learning map of robotics foundations, engineering, autonomy, specialization and graduate research, with prerequisites and free resources.",
};
export default function CurriculumPage() {
  return (
    <Shell>
      <article className="shell curriculum-page">
        <div className="curriculum-heading">
          <Link className="back-link" href="/#explore">
            ← Back to the interactive map
          </Link>
          <h1>
            From curious beginner
            <br />
            to roboticist.
          </h1>
        </div>
        <div className="curriculum-context">
          <p>
            This is a suggested learning map, not an accredited degree or any
            university’s exact requirements. The year labels indicate a typical
            depth of study. Start where your knowledge fits; follow each topic’s
            prerequisites. A topic may span several courses.
          </p>
          <p>
            Build a broad foundation, then choose electives for your interests.
            Master’s programs differ: some culminate in a research thesis,
            others in advanced coursework and a substantial systems project.
          </p>
        </div>
        <nav className="curriculum-jumps" aria-label="Jump to a learning stage">
          {stages.map((s) => (
            <a key={s.id} href={`#stage-${s.id}`}>
              {String(s.id + 1).padStart(2, "0")} {s.title}
            </a>
          ))}
        </nav>
        <div className="curriculum-stages">
          {stages.map((stage) => (
            <section
              className="curriculum-stage"
              key={stage.id}
              id={`stage-${stage.id}`}
            >
              <div className="curriculum-stage-heading">
                <span className="stage-number">
                  {String(stage.id + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2>{stage.title}</h2>
                </div>
              </div>
              <div className="curriculum-subjects">
                {subjects.map((s) => {
                  const entries = topics.filter(
                    (t) => t.subject === s.id && t.stage === stage.id,
                  );
                  if (!entries.length) return null;
                  return (
                    <div
                      key={s.id}
                      className="curriculum-subject"
                      style={
                        { "--subject-color": s.color } as React.CSSProperties
                      }
                    >
                      <h3>{s.title}</h3>
                      <div>
                        {entries.map((t) => (
                          <Link key={t.id} href={`/topics/${t.id}`}>
                            <span>
                              {t.title}
                              {t.kind !== "core" && (
                                <small>
                                  {t.kind === "elective"
                                    ? "Elective"
                                    : "Graduate practice"}
                                </small>
                              )}
                            </span>
                            <ArrowRight size={16} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="stage-evidence">
                <div>
                  <h3>Bring it together</h3>
                  <p>{stage.milestone}</p>
                </div>
                <div>
                  <h3>Ready to go deeper</h3>
                  <p>{stage.readiness}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
        <section className="specializations">
          <h2>Choose a direction to go deeper.</h2>
          <div className="track-grid">
            {tracks.map((track) => (
              <article key={track.title}>
                <h3>{track.title}</h3>
                <div className="related-links">
                  {track.topics.map((id) => (
                    <Link key={id} href={`/topics/${id}`}>
                      {findTopic(id)!.title}
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="curriculum-sources">
          <h2>How this map was assembled</h2>
          <p>
            The topic sequence and exercises are this site’s synthesis.
            University catalogs inform the breadth; open textbooks and official
            documentation provide the learning material. General education,
            institution-specific requirements and every possible research niche
            are outside this map.
          </p>
          <div className="related-links">
            {[
              "michigan",
              "mrsd",
              "modern",
              "underactuated",
              "planning",
              "manipulation",
            ].map((id) => (
              <a
                key={id}
                href={resources[id].url}
                target="_blank"
                rel="noreferrer"
              >
                {resources[id].title} · {resources[id].publisher}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </section>
      </article>
    </Shell>
  );
}
