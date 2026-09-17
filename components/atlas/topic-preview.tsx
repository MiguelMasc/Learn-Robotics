"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { findSubject, findTopic } from "@/data/atlas";
import { subjectIcons } from "./journey-icons";
export function TopicPreview({
  id,
  onSelect,
  onClose,
}: {
  id: string;
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const topic = findTopic(id)!;
  const subject = findSubject(topic.subject)!;
  const Icon = subjectIcons[topic.subject as keyof typeof subjectIcons];
  useEffect(() => {
    const element = dialog.current!;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      element.close();
    };
  }, []);
  useEffect(() => {
    dialog.current?.scrollTo({ top: 0 });
  }, [id]);
  return (
    <dialog
      ref={dialog}
      className="journey-preview"
      aria-labelledby="preview-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          event.currentTarget.close();
      }}
    >
      <div className="journey-preview-content">
        <button
          className="preview-close"
          aria-label="Close topic preview"
          onClick={() => dialog.current?.close()}
        >
          <X size={22} />
        </button>
        <span
          className="subject-symbol"
          style={{ "--subject-color": subject.color } as React.CSSProperties}
        >
          <Icon size={27} aria-hidden="true" />
        </span>
        <span className="sr-only" role="status">
          Selected: {topic.title}
        </span>
        <h3 id="preview-title">{topic.title}</h3>
        <h4>What you’ll discover</h4>
        <ul className="outcome-list">
          {topic.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        {topic.prerequisites.length > 0 && (
          <>
            <h4>Helpful to know first</h4>
            <div className="prerequisite-links">
              {topic.prerequisites.map((id) => (
                <button key={id} onClick={() => onSelect(id)}>
                  {findTopic(id)!.title}
                  <ArrowRight size={16} />
                </button>
              ))}
            </div>
          </>
        )}
        <div className="preview-exercise">
          <h4>Something to try</h4>
          <p>{topic.exercise}</p>
        </div>
        <Link className="button primary" href={`/topics/${id}`}>
          Explore this topic <ArrowRight size={18} />
        </Link>
      </div>
    </dialog>
  );
}
