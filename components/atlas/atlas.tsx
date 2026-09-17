"use client";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import {
  ReactFlow,
  Background,
  Controls,
  Handle,
  Position,
  BaseEdge,
  type NodeProps,
  type EdgeProps,
  type ReactFlowInstance,
} from "@xyflow/react";
import {
  ArrowRight,
  Plus,
  Minus,
  Network,
  RotateCcw,
  ExternalLink,
} from "lucide-react";
import "@xyflow/react/dist/style.css";
import defaultLayout from "@/data/atlas-layouts.json";
import type { AtlasLayout } from "@/lib/atlas-layout.mjs";
import atlasData from "@/data/atlas.json";
import defaultMobileLayout from "@/data/atlas-layouts-mobile.json";
const compactQuery = "(max-width: 540px)";
const subscribeCompact = (callback: () => void) => {
  const query = window.matchMedia(compactQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};
const getCompact = () => window.matchMedia(compactQuery).matches;
const getServerCompact = () => false;
import { subjects, resources, findTopic, findSubject } from "@/data/atlas";
type Point = { x: number; y: number };
function RoutedEdge({ id, data, style }: EdgeProps) {
  const points = data?.points as Point[];
  return (
    <BaseEdge
      id={id}
      path={points.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" ")}
      style={style}
    />
  );
}
function AtlasNode({ data }: NodeProps) {
  return (
    <div
      className={`atlas-node ${data.major ? "major-node" : "minor-node"} ${data.active ? "active-node" : ""}`}
      style={{ "--subject-color": data.color } as React.CSSProperties}
    >
      <Handle type="target" position={Position.Left} />
      <button
        className="node-title nodrag"
        onClick={() => (data.select as () => void)()}
        aria-pressed={!!data.active}
        aria-controls="topic-preview"
      >
        {!!data.major && (
          <span className="node-symbol">
            <Network size={19} />
          </span>
        )}
        <span>{data.title as string}</span>
      </button>
      {!!data.major && (
        <button
          className="node-expand nodrag"
          onClick={() => (data.toggle as () => void)()}
          aria-expanded={!!data.expanded}
          aria-label={`${data.expanded ? "Collapse" : "Expand"} ${data.title}`}
        >
          <span>
            {data.expanded ? "Hide topics" : `${data.topicCount} topics`}
          </span>
          {data.expanded ? <Minus size={15} /> : <Plus size={15} />}
        </button>
      )}
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
const nodeTypes = { atlas: AtlasNode };
const edgeTypes = { routed: RoutedEdge };
export function Atlas() {
  const compact = useSyncExternalStore(
    subscribeCompact,
    getCompact,
    getServerCompact,
  );
  const [mask, setMask] = useState(0);
  const [selected, setSelected] = useState("mathematics-physics");
  const [focusKey, setFocusKey] = useState("");
  const [instance, setInstance] = useState<ReactFlowInstance | null>(null);
  const [computed, setComputed] = useState<{
    mask: number;
    compact: boolean;
    layout: AtlasLayout;
  } | null>(null);
  const [layoutError, setLayoutError] = useState(false);
  const layout =
    mask === 0
      ? compact
        ? defaultMobileLayout
        : defaultLayout
      : (computed?.layout ?? defaultLayout);
  const pending =
    mask !== 0 && (computed?.mask !== mask || computed?.compact !== compact);
  useEffect(() => {
    if (mask === 0) return;
    let cancelled = false;
    import("@/lib/atlas-layout.mjs")
      .then(({ layoutAtlas }) =>
        layoutAtlas(
          subjects,
          atlasData.relationships,
          subjects.filter((_, i) => mask & (1 << i)).map((s) => s.id),
          compact,
        ),
      )
      .then((layout) => {
        if (!cancelled) {
          setComputed({ mask, compact, layout });
          setLayoutError(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLayoutError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [mask, compact]);
  useEffect(() => {
    if (pending) return;
    const frame = requestAnimationFrame(() => {
      const node = layout.nodes.find((n) => n.id === focusKey);
      if (node)
        instance?.setCenter(node.x + node.width / 2, node.y + node.height / 2, {
          zoom: compact ? 0.85 : 0.95,
        });
      else instance?.fitView({ padding: 0.12, maxZoom: 1 });
    });
    return () => cancelAnimationFrame(frame);
  }, [layout, instance, compact, focusKey, pending]);
  const select = useCallback((id: string) => {
    setSelected(id);
    setFocusKey(id);
  }, []);
  const nodes = useMemo(
    () =>
      layout.nodes.map((n) => {
        const s = findSubject(n.id);
        const topic = findTopic(n.id);
        const parent = s ?? findSubject(topic!.subject)!;
        const index = subjects.findIndex((x) => x.id === n.id);
        return {
          id: n.id,
          type: "atlas",
          position: { x: n.x, y: n.y },
          width: n.width,
          height: n.height,
          draggable: false,
          focusable: false,
          data: {
            title: (s ?? topic)!.title,
            major: !!s,
            topicCount: s?.children.length,
            color: parent.color,
            active: selected === n.id,
            expanded: !!(mask & (1 << index)),
            select: () => select(n.id),
            toggle: () => {
              setMask((m) => m ^ (1 << index));
              select(n.id);
            },
          },
        };
      }),
    [layout, mask, selected, select],
  );
  const edges = useMemo(
    () =>
      layout.edges.map((e) => ({
        ...e,
        type: "routed",
        data: { points: e.points },
        style: {
          stroke:
            e.source === selected || e.target === selected
              ? "#8c642c"
              : "#bdb4a4",
          strokeWidth:
            e.source === selected || e.target === selected ? 2.4 : 1.5,
          strokeDasharray: findTopic(e.target) ? "5 5" : undefined,
        },
      })),
    [layout, selected],
  );
  const subject = findSubject(selected);
  const topic = findTopic(selected);
  const entry = subject ?? topic!;
  const parent = subject ?? findSubject(topic!.subject)!;
  const intro = resources[subject?.orientation ?? topic!.orientation];
  function reset() {
    setMask(0);
    setSelected("mathematics-physics");
    setFocusKey("");
    setLayoutError(false);
    requestAnimationFrame(() =>
      instance?.fitView({ padding: 0.2, duration: 0 }),
    );
  }
  return (
    <div className="atlas-layout">
      <div className="canvas-wrap">
        <div className="canvas-toolbar">
          <label className="subject-jump">
            Jump to
            <select
              aria-label="Jump to subject"
              value={parent.id}
              onChange={(e) => select(e.target.value)}
            >
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>
          <button onClick={reset} className="quiet-button">
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
        {pending && !layoutError && (
          <p className="layout-status" role="status">
            Arranging topics…
          </p>
        )}
        {layoutError && (
          <p className="layout-status" role="alert">
            The map could not be arranged. Use Reset to retry, or explore the
            topic links alongside it.
          </p>
        )}
        <div
          className="map-canvas"
          aria-label="Interactive map of robotics subjects"
          aria-busy={pending && !layoutError}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onInit={setInstance}
            onNodeClick={(_, node) => select(node.id)}
            fitView
            fitViewOptions={{ padding: 0.16, maxZoom: 1 }}
            minZoom={0.1}
            maxZoom={1.6}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            zoomOnScroll={false}
            panOnScroll={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: false }}
            ariaLabelConfig={{
              "node.a11yDescription.default":
                "Use Tab to move between topic buttons. Press Enter to preview or expand a subject.",
              "node.a11yDescription.keyboardDisabled":
                "Use Tab to move between topic buttons. Press Enter to preview or expand a subject.",
              "edge.a11yDescription.default":
                "Connections show relationships between subjects.",
            }}
          >
            <Background color="#d4cabb" gap={22} size={1} />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>
      </div>
      <aside
        id="topic-preview"
        className="topic-preview"
        aria-label="Selected topic preview"
      >
        <span className="sr-only" role="status">
          Selected: {entry.title}
        </span>
        <div className="preview-color" style={{ background: parent.color }} />
        <div className="preview-content" key={selected}>
          <h3>{entry.title}</h3>
          {subject && (
            <ul className="preview-topics">
              {subject.children.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      setMask((m) => m | (1 << subjects.indexOf(subject)));
                      select(id);
                    }}
                  >
                    {findTopic(id)!.title}
                    <ArrowRight size={15} />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <a
            className="orientation-link"
            href={intro.url}
            target="_blank"
            rel="noreferrer"
          >
            Get an orientation <ExternalLink size={15} />
          </a>
          <Link className="button primary" href={`/topics/${selected}`}>
            Explore {subject ? "this subject" : "this topic"}
            <ArrowRight size={17} />
          </Link>
        </div>
      </aside>
    </div>
  );
}
