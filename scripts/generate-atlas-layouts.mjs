import { readFile, writeFile } from "node:fs/promises";
import { layoutAtlas } from "../lib/atlas-layout.mjs";
const { subjects, relationships } = JSON.parse(
  await readFile(new URL("../data/atlas.json", import.meta.url), "utf8"),
);
for (const compact of [false, true]) {
  const layout = await layoutAtlas(subjects, relationships, [], compact);
  const path = compact
    ? "../data/atlas-layouts-mobile.json"
    : "../data/atlas-layouts.json";
  await writeFile(new URL(path, import.meta.url), JSON.stringify(layout));
}
console.log(
  "Generated desktop and mobile overview layouts. Expanded layouts are computed on demand.",
);
