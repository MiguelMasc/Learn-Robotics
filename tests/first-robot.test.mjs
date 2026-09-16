import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const html = readFileSync(new URL("../public/tutorials/first-robot.html", import.meta.url), "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];

function createLab() {
  const elements = new Map();
  const frames = new Map();
  let nextFrame = 0;
  const context = vm.createContext({
    document: {
      getElementById(id) {
        if (!elements.has(id)) {
          elements.set(id, {
            value: "", textContent: "", attributes: {}, events: {},
            setAttribute(name, value) { this.attributes[name] = value; },
            addEventListener(name, handler) { this.events[name] = handler; },
            focus() {},
          });
        }
        return elements.get(id);
      },
    },
    requestAnimationFrame(callback) { frames.set(++nextFrame, callback); return nextFrame; },
    cancelAnimationFrame(id) { frames.delete(id); },
  });
  vm.runInContext(script, context);
  return {
    evaluate: (code) => vm.runInContext(code, context),
    click: (id) => elements.get(id).events.click(),
    element: (id) => elements.get(id),
    drain() {
      let time = 0;
      while (frames.size) {
        assert.ok(time < 65000, "Animation should terminate within its duration limit");
        const callbacks = [...frames.values()];
        frames.clear();
        callbacks.forEach((callback) => callback(time));
        time += 100;
      }
    },
  };
}

const close = (actual, expected, tolerance = 1e-6) => assert.ok(Math.abs(actual - expected) < tolerance, `${actual} should be near ${expected}`);

test("equal wheel speeds travel one meter without turning", () => {
  const lab = createLab();
  const result = lab.evaluate("advance({x:0,y:0,heading:0}, STRAIGHT[0], 5)");
  close(result.x, 1); close(result.y, 0); close(result.heading, 0);
});

test("opposite wheel speeds rotate in place; a stationary wheel traces an arc", () => {
  const lab = createLab();
  const turn = lab.evaluate("advance({x:0,y:0,heading:0}, TURN[0], Math.PI/2)");
  close(turn.x, 0); close(turn.y, 0); close(turn.heading, Math.PI / 2);
  const arc = lab.evaluate("advance({x:0,y:0,heading:0}, {left:0,right:0.2}, Math.PI/2)");
  close(arc.x, 0.1); close(arc.y, 0.1);
});

test("the animated square completes all eight commands and returns home", () => {
  const lab = createLab();
  lab.click("square"); lab.click("run"); lab.drain();
  const result = lab.evaluate("pose");
  close(result.x, 0); close(result.y, 0); close(result.heading, 2 * Math.PI);
  assert.match(lab.element("status").textContent, /Finished 8 commands/);
  assert.equal(lab.element("run").disabled, false);
  assert.equal(lab.element("stop").disabled, true);
});

test("the learner's shortened first side ends half a meter behind the origin", () => {
  const lab = createLab();
  lab.click("square");
  const commands = JSON.parse(lab.element("program").value);
  commands[0].seconds = 2.5;
  lab.element("program").value = JSON.stringify(commands);
  lab.click("run"); lab.drain();
  const result = lab.evaluate("pose");
  close(result.x, -0.5); close(result.y, 0);
});

test("invalid, nonnumeric, and excessive programs do not start motion", () => {
  const lab = createLab();
  const invalid = ["[", "[]", "null", '[{"left":"0.2","right":0.2,"seconds":5}]',
    '[{"left":0.2,"right":0.2,"seconds":0}]', '[{"left":1,"right":0.2,"seconds":5}]',
    '[{"left":0.2,"right":0.2,"seconds":5,"extra":1}]',
    JSON.stringify(Array(7).fill({ left: 0.2, right: 0.2, seconds: 10 }))];
  for (const text of invalid) {
    lab.element("program").value = text;
    lab.click("run");
    assert.equal(lab.element("program").attributes["aria-invalid"], "true", text);
    close(lab.evaluate("pose.x"), 0);
  }
  lab.click("straight"); lab.click("run"); lab.drain();
  close(lab.evaluate("pose.x"), 1);
});

test("stop cancels motion and reset preserves edited commands", () => {
  const lab = createLab();
  lab.click("square");
  const program = lab.element("program").value;
  lab.click("run"); lab.click("stop"); lab.drain();
  close(lab.evaluate("pose.x"), 0);
  lab.click("reset");
  assert.equal(lab.element("program").value, program);
  assert.equal(lab.element("program").readOnly, false);
});
