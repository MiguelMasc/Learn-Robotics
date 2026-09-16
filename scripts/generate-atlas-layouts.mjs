import ELK from "elkjs/lib/elk.bundled.js";
import { readFile, writeFile } from "node:fs/promises";
const { subjects } = JSON.parse(
  await readFile(new URL("../data/atlas.json", import.meta.url), "utf8"),
);
const elk = new ELK();
for (const compact of [false, true]) {
  const layouts = {};
  for (let mask = 0; mask < 16; mask++) {
    const ids = subjects.flatMap((s, i) => [
      s.id,
      ...(mask & (1 << i) ? s.children : []),
    ]);
    const links = [
      ["mechanical-design", "motion-control"],
      ["electronics-sensing", "motion-control"],
      ["programming", "motion-control"],
      ["electronics-sensing", "programming"],
      ...subjects.flatMap((s, i) =>
        mask & (1 << i) ? s.children.map((c) => [s.id, c]) : [],
      ),
    ];
    const result = await elk.layout({
      id: "atlas",
      layoutOptions: {
        "elk.algorithm": "layered",
        "elk.direction": compact ? "DOWN" : "RIGHT",
        "elk.edgeRouting": "ORTHOGONAL",
        "elk.spacing.nodeNode": compact ? "22" : "32",
        "elk.layered.spacing.nodeNodeBetweenLayers": compact ? "42" : "72",
        "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
        "elk.padding": "[top=40,left=40,bottom=40,right=40]",
      },
      children: ids.map((id) => ({
        id,
        width: compact ? 160 : 240,
        height: subjects.some((s) => s.id === id) ? 120 : 76,
      })),
      edges: links.map(([s, t], i) => ({
        id: "e" + i,
        sources: [s],
        targets: [t],
      })),
    });
    layouts[mask] = {
      nodes: result.children.map((n) => ({
        id: n.id,
        x: n.x,
        y: n.y,
        width: n.width,
        height: n.height,
      })),
      edges: result.edges.map((e) => ({
        id: e.id,
        source: e.sources[0],
        target: e.targets[0],
        points: e.sections.flatMap((s) => [
          s.startPoint,
          ...(s.bendPoints ?? []),
          s.endPoint,
        ]),
      })),
      width: result.width,
      height: result.height,
    };
  }
  await writeFile(
    new URL(
      compact
        ? "../data/atlas-layouts-mobile.json"
        : "../data/atlas-layouts.json",
      import.meta.url,
    ),
    JSON.stringify(layouts),
  );
  console.log(
    "Generated all 16 expansion layouts with orthogonal ELK routing.",
  );
}
