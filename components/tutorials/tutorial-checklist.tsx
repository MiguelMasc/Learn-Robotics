"use client";

import { useState, useSyncExternalStore } from "react";

const storageKey = "learn-robotics:first-robot:v1";
const changeEvent = "first-robot-progress";
const checkpoints = [
  "I drove straight and measured x = 1.00 m, y = 0.00 m.",
  "I turned in place and measured a 90° heading.",
  "I ran a square and finished within 0.02 m of the start.",
  "I changed one command and explained the different path.",
  "I saved my command sequence and a screenshot of the result.",
];
let temporaryProgress: string | null = null;

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}

function getSnapshot() {
  if (temporaryProgress !== null) return temporaryProgress;
  try { return window.localStorage.getItem(storageKey) ?? "[]"; }
  catch { return "[]"; }
}

function saveProgress(value: string) {
  let saved = true;
  try {
    window.localStorage.setItem(storageKey, value);
    temporaryProgress = null;
  } catch {
    temporaryProgress = value;
    saved = false;
  }
  window.dispatchEvent(new Event(changeEvent));
  return saved;
}

export function TutorialChecklist() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => "[]");
  const [saveMessage, setSaveMessage] = useState("Check off each result as you verify it. Progress is saved in this browser.");
  let checked: number[] = [];
  try {
    const parsed: unknown = JSON.parse(snapshot);
    if (Array.isArray(parsed)) {
      checked = [...new Set(parsed.filter((item): item is number => Number.isInteger(item) && item >= 0 && item < checkpoints.length))];
    }
  } catch { /* Ignore damaged saved progress. */ }

  function toggle(index: number) {
    const next = checked.includes(index) ? checked.filter((item) => item !== index) : [...checked, index];
    const saved = saveProgress(JSON.stringify(next));
    setSaveMessage(saved
      ? "Progress saved in this browser. Clearing site data will remove it."
      : "Browser storage is unavailable. Progress will last for this page visit only.");
  }

  return (
    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
      <p className="text-lg font-bold" role="status">{checked.length} of {checkpoints.length} checkpoints complete</p>
      <p className="mt-2 text-sm text-zinc-600">{saveMessage}</p>
      <fieldset className="mt-5 space-y-3">
        <legend className="sr-only">First robot completion checklist</legend>
        {checkpoints.map((checkpoint, index) => (
          <label key={checkpoint} className="flex min-h-11 cursor-pointer items-start gap-3 rounded-md bg-white p-3 text-sm leading-6">
            <input type="checkbox" checked={checked.includes(index)} onChange={() => toggle(index)} className="mt-1 size-5 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800" />
            {checkpoint}
          </label>
        ))}
      </fieldset>
      {checked.length === checkpoints.length && <p className="mt-5 font-bold text-emerald-900">First robot complete. You can now predict, program, and measure a robot&apos;s motion.</p>}
    </div>
  );
}
