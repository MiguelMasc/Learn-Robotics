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
import layouts from "@/data/atlas-layouts.json";
import mobileLayouts from "@/data/atlas-layouts-mobile.json";
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
          <span>{data.expanded ? "Hide topics" : "3 topics"}</span>
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
  const [selected, setSelected] = useState("mechanical-design");
  const [instance, setInstance] = useState<ReactFlowInstance | null>(null);
  const focusKey = compact ? selected : "";
  useEffect(() => {
    let secondFrame = 0;
    const frame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() =>
        compact && mask !== 0
          ? (() => {
              const node = mobileLayouts[
                String(mask) as keyof typeof mobileLayouts
              ].nodes.find((n) => n.id === focusKey);
              if (node)
                instance?.setCenter(
                  node.x + node.width / 2,
                  node.y + node.height / 2,
                  { zoom: 0.95, duration: 0 },
                );
            })()
          : instance?.fitView({ padding: 0.16, maxZoom: 1, duration: 0 }),
      );
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(secondFrame);
    };
  }, [mask, instance, compact, focusKey]);
  const layout = (compact ? mobileLayouts : layouts)[
    String(mask) as keyof typeof layouts
  ];
  const select = useCallback((id: string) => setSelected(id), []);
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
            color: parent.color,
            active: selected === n.id,
            expanded: !!(mask & (1 << index)),
            select: () => select(n.id),
            toggle: () => {
              setMask((m) => m ^ (1 << index));
              setSelected(n.id);
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
    setSelected("mechanical-design");
    requestAnimationFrame(() =>
      instance?.fitView({ padding: 0.2, duration: 0 }),
    );
  }
  return (
    <div className="atlas-layout">
      <div className="canvas-wrap">
        <div className="canvas-toolbar">
          <button onClick={reset} className="quiet-button">
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
        <div
          className="map-canvas"
          aria-label="Interactive map of robotics subjects"
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
            minZoom={0.2}
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
          <p>{entry.description}</p>
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
