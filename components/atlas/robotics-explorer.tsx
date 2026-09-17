"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Route, Network } from "lucide-react";
import { Atlas } from "./atlas";
import { TopicPreview } from "./topic-preview";
import { subjects, topics, findTopic } from "@/data/atlas";
import { stages } from "@/data/journey";
import { stageIcons, subjectIcons } from "./journey-icons";
export function RoboticsExplorer() {
  const [view, setView] = useState<"journey" | "subjects">("journey");
  const [stage, setStage] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  function selectTopic(id: string) {
    setSelected(id);
    setStage(findTopic(id)!.stage);
  }
  function selectStage(id: number) {
    setStage(id);
    setSelected(null);
  }
  const current = stages[stage];
  return (
    <div className="robotics-explorer">
      <div className="explorer-toolbar">
        <div
          className="view-switch"
          role="group"
          aria-label="Explore robotics by"
        >
          <button
            aria-pressed={view === "journey"}
            onClick={() => setView("journey")}
          >
            <Route size={17} /> Learning journey
          </button>
          <button
            aria-pressed={view === "subjects"}
            onClick={() => setView("subjects")}
          >
            <Network size={17} /> Subject map
          </button>
        </div>
        <Link href="/curriculum">
          Browse the full journey <ArrowRight size={15} />
        </Link>
      </div>
      {view === "subjects" ? (
        <>
          <Atlas />
          <p className="map-footnote">
            Curious how it all connects? Choose a subject to look closer. Drag
            the map to explore, or use the controls to zoom.
          </p>
        </>
      ) : (
        <>
          <nav className="journey-stages" aria-label="Learning stages">
            {stages.map((s) => {
              const Icon = stageIcons[s.id];
              return (
                <button
                  key={s.id}
                  aria-current={stage === s.id ? "step" : undefined}
                  onClick={() => selectStage(s.id)}
                >
                  <span className="stage-icon">
                    <Icon size={27} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{s.title}</strong>
                    <small>{s.period}</small>
                  </span>
                </button>
              );
            })}
          </nav>
          <div className="journey-body">
            <div className="journey-main">
              <div className="journey-intro">
                <h3>{current.title}</h3>
                <p>{current.description}</p>
              </div>
              <div className="journey-topics">
                {subjects.map((subject) => {
                  const entries = topics.filter(
                    (t) => t.subject === subject.id && t.stage === stage,
                  );
                  if (!entries.length) return null;
                  const Icon =
                    subjectIcons[subject.id as keyof typeof subjectIcons];
                  return (
                    <section
                      className="journey-subject"
                      key={subject.id}
                      style={
                        {
                          "--subject-color": subject.color,
                        } as React.CSSProperties
                      }
                    >
                      <div className="journey-subject-heading">
                        <span className="subject-symbol">
                          <Icon
                            size={25}
                            strokeWidth={1.6}
                            aria-hidden="true"
                          />
                        </span>
                        <h4>{subject.title}</h4>
                      </div>
                      <p>{subject.description}</p>
                      {entries.map((t) => (
                        <button
                          key={t.id}
                          data-topic-id={t.id}
                          aria-pressed={selected === t.id}
                          aria-haspopup="dialog"
                          onClick={() => setSelected(t.id)}
                        >
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
                          <ArrowRight size={15} />
                        </button>
                      ))}
                    </section>
                  );
                })}
              </div>
              <div className="journey-milestone">
                <h4>See it come to life</h4>
                <p>{current.milestone}</p>
              </div>
              <div className="journey-pagination">
                <button
                  disabled={stage === 0}
                  onClick={() => selectStage(stage - 1)}
                >
                  <ArrowLeft size={15} /> Previous stage
                </button>
                <span>
                  {stage + 1} / {stages.length}
                </span>
                <button
                  disabled={stage === stages.length - 1}
                  onClick={() => selectStage(stage + 1)}
                >
                  Next stage <ArrowRight size={15} />
                </button>
              </div>
            </div>
            {selected && (
              <TopicPreview
                id={selected}
                onSelect={selectTopic}
                onClose={() => {
                  setSelected(null);
                  requestAnimationFrame(() =>
                    document
                      .querySelector<HTMLButtonElement>(
                        `[data-topic-id="${selected}"]`,
                      )
                      ?.focus({ preventScroll: true }),
                  );
                }}
              />
            )}
          </div>
          <p className="map-footnote">
            There’s no rush, and no single right path. Start wherever you feel
            comfortable. Each topic will show you what’s helpful to know first.
          </p>
        </>
      )}
    </div>
  );
}
