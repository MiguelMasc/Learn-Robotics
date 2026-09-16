"use client";

import { useEffect, useRef, useState } from "react";

export function RobotLab() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(1100);

  useEffect(() => {
    function resize(event: MessageEvent) {
      if (event.source !== frame.current?.contentWindow || event.data?.type !== "first-robot:height") return;
      const next = event.data.height;
      if (typeof next === "number" && Number.isFinite(next) && next >= 200 && next <= 10000) {
        setHeight(Math.ceil(next) + 4);
      }
    }
    window.addEventListener("message", resize);
    return () => window.removeEventListener("message", resize);
  }, []);

  return (
    <iframe ref={frame} src="/tutorials/first-robot.html" title="Interactive two-wheel robot simulator"
      className="w-full rounded-lg border border-zinc-300" style={{ height }} sandbox="allow-scripts" loading="lazy"
      onLoad={() => frame.current?.contentWindow?.postMessage({ type: "first-robot:measure" }, "*")} />
  );
}
