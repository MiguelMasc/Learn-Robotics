"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";

import {
  resourcesForTopic,
  type TechnicalResource,
} from "@/data/curriculum-resources";

type TechnicalTopic = {
  name: string;
  detail: string;
  methods: string[];
};

export function TopicModalGrid({ topics }: { topics: TechnicalTopic[] }) {
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const selectedTopic = useMemo(
    () => topics.find((topic) => topic.name === selectedName) ?? null,
    [selectedName, topics],
  );

  useEffect(() => {
    if (!selectedTopic) {
      return;
    }

    const triggerName = selectedTopic.name;
    const triggerElement = triggerRefs.current[triggerName];
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedName(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.requestAnimationFrame(() => triggerElement?.focus());
    };
  }, [selectedTopic]);

  return (
    <>
      <div className="grid gap-x-10 md:grid-cols-2">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="flex h-full flex-col border-t border-zinc-300 py-6 text-left"
          >
            <h4>
              <button
                ref={(element) => {
                  triggerRefs.current[topic.name] = element;
                }}
                type="button"
                onClick={() => setSelectedName(topic.name)}
                aria-haspopup="dialog"
                className="text-left text-xl font-black leading-tight text-emerald-800 transition-colors hover:text-emerald-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4"
              >
                {topic.name}
              </button>
            </h4>
            <p className="mt-3 grow text-base font-medium leading-7 text-zinc-700">
              {topic.detail}
            </p>
            <p className="mt-4 text-sm font-semibold leading-6 text-zinc-500">
              {topic.methods.join(", ")}
            </p>
          </div>
        ))}
      </div>

      {selectedTopic ? (
        <TopicResourceModal
          topic={selectedTopic}
          resources={resourcesForTopic(selectedTopic.name)}
          closeButtonRef={closeButtonRef}
          onClose={() => setSelectedName(null)}
        />
      ) : null}
    </>
  );
}

function TopicResourceModal({
  topic,
  resources,
  closeButtonRef,
  onClose,
}: {
  topic: TechnicalTopic;
  resources: TechnicalResource[];
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/65 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="topic-resource-title"
        aria-describedby="topic-resource-description"
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white shadow-2xl"
      >
        <header className="sticky top-0 z-10 flex items-start justify-between gap-5 border-b border-zinc-200 bg-white/95 p-6 backdrop-blur sm:p-8">
          <h2 id="topic-resource-title" className="text-2xl font-black sm:text-3xl">
            {topic.name}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-11 shrink-0 items-center justify-center text-zinc-700 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
            aria-label={`Close ${topic.name} resources`}
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>

        <div className="p-6 sm:p-8">
          <p id="topic-resource-description" className="text-lg font-medium leading-8 text-zinc-700">
            {topic.detail}
          </p>

          <p className="mt-4 text-sm font-semibold leading-6 text-zinc-500">
            {topic.methods.join(", ")}
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-zinc-900">Resources</h3>
            <div className="mt-4 border-b border-zinc-300">
              {resources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block border-t border-zinc-300 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-xl font-black leading-tight text-zinc-950 transition-colors group-hover:text-emerald-800">
                      {resource.title}
                    </h4>
                    <ExternalLink
                      className="mt-1 size-5 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-900"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-zinc-500">
                    {resource.publisher} · {resource.format}
                  </p>
                  <p className="mt-3 text-base font-medium leading-7 text-zinc-700">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
