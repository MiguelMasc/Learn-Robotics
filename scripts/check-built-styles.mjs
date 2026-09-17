import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import postcss from "postcss";

// Check the stylesheets actually linked by the prerendered home page. A build
// can succeed while cached CSS omits the styles required by newer components.
const output = resolve(process.argv[2] || ".next");
const html = await readFile(resolve(output, "server/app/index.html"), "utf8");
const sheets = [...html.matchAll(/<link\b[^>]*>/g)]
  .map(([tag]) => tag)
  .filter((tag) => /rel="stylesheet"/.test(tag))
  .map((tag) => tag.match(/href="([^"?]+)/)?.[1])
  .filter(
    (href) => href?.startsWith("/_next/static/") && href.endsWith(".css"),
  );
assert.ok(sheets.length, "The homepage must load its production stylesheets");
const css = postcss.parse(
  (
    await Promise.all(
      sheets.map((href) =>
        readFile(resolve(output, href.slice("/_next/".length)), "utf8"),
      ),
    )
  ).join("\n"),
);
const required = new Map([
  [".explorer-toolbar", ["display", "flex"]],
  [".view-switch", ["display", "inline-flex"]],
  [".journey-stages", ["display", "grid"]],
  [".journey-topics", ["display", "grid"]],
  [".journey-preview", ["position", "fixed"]],
  [".curriculum-subjects", ["display", "grid"]],
]);
css.walkRules((rule) => {
  for (const selector of rule.selectors) {
    const expected = required.get(selector);
    if (!expected) continue;
    rule.walkDecls(expected[0], (declaration) => {
      if (declaration.value === expected[1]) required.delete(selector);
    });
  }
});
assert.equal(
  required.size,
  0,
  `Production CSS is missing required layout rules: ${[...required.keys()].join(", ")}`,
);
console.log(
  "PASS: homepage assets include explorer, dialog, and curriculum layout styles.",
);
