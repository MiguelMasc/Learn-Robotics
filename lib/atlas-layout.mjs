import ELK from "elkjs/lib/elk.bundled.js";
const elk = new ELK();
/** Compute only the requested expansion, rather than storing 2^N graphs. */
export async function layoutAtlas(
  subjects,
  relationships,
  expanded = [],
  compact = false,
) {
  const open = new Set(expanded);
  const ids = subjects.flatMap((s) => [
    s.id,
    ...(open.has(s.id) ? s.children : []),
  ]);
  const links = [
    ...relationships,
    ...subjects.flatMap((s) =>
      open.has(s.id) ? s.children.map((c) => [s.id, c]) : [],
    ),
  ];
  const graph = await elk.layout({
    id: "robotics",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": compact ? "DOWN" : "RIGHT",
      "elk.edgeRouting": "ORTHOGONAL",
      "elk.spacing.nodeNode": "30",
      "elk.layered.spacing.nodeNodeBetweenLayers": "64",
      "elk.padding": "[top=30,left=30,bottom=30,right=30]",
    },
    children: ids.map((id) => ({
      id,
      width: 240,
      height: subjects.some((s) => s.id === id) ? 120 : 76,
    })),
    edges: links.map(([source, target], i) => ({
      id: `e${i}`,
      sources: [source],
      targets: [target],
    })),
  });
  return {
    nodes: graph.children.map(({ id, x, y, width, height }) => ({
      id,
      x,
      y,
      width,
      height,
    })),
    edges: graph.edges.map((e) => ({
      id: e.id,
      source: e.sources[0],
      target: e.targets[0],
      points: e.sections.flatMap((s) => [
        s.startPoint,
        ...(s.bendPoints ?? []),
        s.endPoint,
      ]),
    })),
  };
}
