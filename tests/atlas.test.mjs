import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { layoutAtlas } from "../lib/atlas-layout.mjs";
const read = (p) =>
  JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));
const { subjects, topics, resources, relationships } =
  read("../data/atlas.json");
const builds = read("../data/builds.json");
test("every published subject, topic and build resolves its content references", () => {
  const all = [...subjects, ...topics];
  assert.equal(new Set(all.map((t) => t.id)).size, all.length);
  for (const s of subjects) {
    assert.ok(resources[s.orientation]);
    assert.deepEqual(
      s.children,
      topics.filter((t) => t.subject === s.id).map((t) => t.id),
    );
    assert.ok(s.children.length > 0);
  }
  for (const t of topics) {
    assert.ok(subjects.some((s) => s.id === t.subject));
    for (const id of [
      t.orientation,
      t.researchSource,
      t.establishedSource,
      ...t.resources,
      ...t.foundations,
    ])
      assert.ok(resources[id], `${t.id}: missing resource ${id}`);
    assert.ok(
      t.resources.length >= 2,
      `${t.id} needs relevant starting resources`,
    );
    assert.equal(new Set(t.resources).size, t.resources.length);
    for (const id of t.related) assert.ok(topics.some((t) => t.id === id));
    assert.ok(
      t.exercise.length > 30,
      `${t.id} needs an actionable practical exercise`,
    );
    assert.ok(t.outcomes.length >= 3);
    assert.ok(["core", "elective", "research"].includes(t.kind));
  }
  for (const b of builds) {
    assert.ok(["external", "proposal"].includes(b.kind));
    assert.ok(resources[b.source]);
    for (const id of b.topics) assert.ok(topics.some((t) => t.id === id));
  }
  for (const [id, r] of Object.entries(resources)) {
    assert.equal(new URL(r.url).protocol, "https:");
    assert.equal(r.id, id);
  }
  for (const pair of relationships)
    for (const id of pair) assert.ok(subjects.some((s) => s.id === id));
});
test("the learning journey has six populated stages and an acyclic prerequisite graph", () => {
  assert.deepEqual(
    [...new Set(topics.map((t) => t.stage))].sort(),
    [0, 1, 2, 3, 4, 5],
  );
  const visited = new Set();
  function visit(topic, ancestors = new Set()) {
    assert.ok(!ancestors.has(topic.id), `prerequisite cycle at ${topic.id}`);
    if (visited.has(topic.id)) return;
    const next = new Set([...ancestors, topic.id]);
    for (const id of topic.prerequisites) {
      const pre = topics.find((t) => t.id === id);
      assert.ok(pre, `${topic.id}: missing prerequisite ${id}`);
      assert.ok(
        pre.stage <= topic.stage,
        `${topic.id} requires a later stage: ${id}`,
      );
      visit(pre, next);
    }
    visited.add(topic.id);
  }
  topics.forEach((t) => visit(t));
  assert.ok(
    topics
      .filter((t) => t.stage === 0)
      .some((t) => t.prerequisites.length === 0),
  );
  assert.ok(
    topics.filter((t) => t.stage === 5).every((t) => t.kind !== "core"),
  );
});
function checkGeometry({ nodes, edges }, expanded) {
  const expected = subjects
    .flatMap((s) => [s.id, ...(expanded.includes(s.id) ? s.children : [])])
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
        `overlapping ${a.id}/${b.id}`,
      );
    }
  for (const e of edges) {
    assert.ok(nodes.some((n) => n.id === e.source));
    assert.ok(nodes.some((n) => n.id === e.target));
    for (let i = 1; i < e.points.length; i++) {
      const a = e.points[i - 1],
        b = e.points[i];
      assert.ok(
        Math.abs(a.x - b.x) < 1e-7 || Math.abs(a.y - b.y) < 1e-7,
        `nonorthogonal edge ${e.id}`,
      );
      for (const n of nodes.filter(
        (n) => n.id !== e.source && n.id !== e.target,
      )) {
        const crosses =
          Math.abs(a.x - b.x) < 1e-7
            ? a.x > n.x &&
              a.x < n.x + n.width &&
              Math.max(a.y, b.y) > n.y &&
              Math.min(a.y, b.y) < n.y + n.height
            : a.y > n.y &&
              a.y < n.y + n.height &&
              Math.max(a.x, b.x) > n.x &&
              Math.min(a.x, b.x) < n.x + n.width;
        assert.ok(!crosses, `edge ${e.id} crosses ${n.id}`);
      }
    }
  }
}
test("overview and dynamic expansion layouts avoid overlaps and route around nodes", async () => {
  const cases = [
    [],
    ...subjects.map((s) => [s.id]),
    subjects.slice(0, 4).map((s) => s.id),
    subjects.map((s) => s.id),
  ];
  for (const compact of [false, true]) {
    checkGeometry(
      read(
        compact
          ? "../data/atlas-layouts-mobile.json"
          : "../data/atlas-layouts.json",
      ),
      [],
    );
    for (const expanded of cases)
      checkGeometry(
        await layoutAtlas(subjects, relationships, expanded, compact),
        expanded,
      );
  }
});
