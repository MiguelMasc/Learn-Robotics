import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (p) =>
  JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));
const { subjects, topics, resources } = read("../data/atlas.json");
const builds = read("../data/builds.json");
const layoutVariants = [
  read("../data/atlas-layouts.json"),
  read("../data/atlas-layouts-mobile.json"),
];
test("every published subject, topic and build resolves its content references", () => {
  const all = [...subjects, ...topics];
  assert.equal(new Set(all.map((t) => t.id)).size, all.length);
  for (const s of subjects) {
    assert.ok(resources[s.orientation]);
    assert.deepEqual(s.children, [
      ...topics.filter((t) => t.subject === s.id).map((t) => t.id),
    ]);
  }
  for (const t of topics) {
    assert.ok(subjects.some((s) => s.id === t.subject));
    assert.ok(resources[t.orientation]);
    assert.ok(resources[t.researchSource]);
    assert.ok(resources[t.establishedSource]);
    assert.ok(t.resources.length >= 4);
    assert.equal(new Set(t.resources).size, t.resources.length);
    for (const r of t.resources) assert.ok(resources[r]);
    for (const id of t.related) assert.ok(topics.some((t) => t.id === id));
    assert.ok(
      builds.some((b) => b.topics.includes(t.id)),
      `${t.id} needs a practical example`,
    );
  }
  for (const b of builds) {
    assert.ok(["external", "proposal"].includes(b.kind));
    assert.ok(resources[b.source]);
    for (const id of b.topics) assert.ok(topics.some((t) => t.id === id));
  }
  for (const r of Object.values(resources))
    assert.equal(new URL(r.url).protocol, "https:");
});
test("all expansion states have nonoverlapping nodes and orthogonal routes that avoid unrelated nodes", () => {
  for (const layouts of layoutVariants) {
    assert.equal(Object.keys(layouts).length, 2 ** subjects.length);
    for (let mask = 0; mask < 16; mask++) {
      const { nodes, edges } = layouts[mask];
      const expected = subjects
        .flatMap((s, i) => [s.id, ...(mask & (1 << i) ? s.children : [])])
        .sort();
      assert.deepEqual(nodes.map((n) => n.id).sort(), expected);
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          assert.ok(
            a.x + a.width <= b.x ||
              b.x + b.width <= a.x ||
              a.y + a.height <= b.y ||
              b.y + b.height <= a.y,
            `state ${mask}: overlapping ${a.id}/${b.id}`,
          );
        }
      for (const e of edges) {
        assert.ok(nodes.some((n) => n.id === e.source));
        assert.ok(nodes.some((n) => n.id === e.target));
        for (let i = 1; i < e.points.length; i++) {
          const a = e.points[i - 1],
            b = e.points[i];
          assert.ok(
            a.x === b.x || a.y === b.y,
            `state ${mask}: nonorthogonal edge`,
          );
          for (const n of nodes.filter(
            (n) => n.id !== e.source && n.id !== e.target,
          )) {
            const crosses =
              a.x === b.x
                ? a.x > n.x &&
                  a.x < n.x + n.width &&
                  Math.max(a.y, b.y) > n.y &&
                  Math.min(a.y, b.y) < n.y + n.height
                : a.y > n.y &&
                  a.y < n.y + n.height &&
                  Math.max(a.x, b.x) > n.x &&
                  Math.min(a.x, b.x) < n.x + n.width;
            assert.ok(!crosses, `state ${mask}: edge ${e.id} crosses ${n.id}`);
          }
        }
      }
    }
  }
});
