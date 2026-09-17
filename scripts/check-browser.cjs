/* eslint-disable @typescript-eslint/no-require-imports -- Portable browser verification CLI. */
const { chromium } = require(process.argv[2] || "playwright");
const assert = require("node:assert/strict");
const { mkdirSync } = require("node:fs");
const { subjects, topics } = require("../data/atlas.json");
const builds = require("../data/builds.json");
const base = process.env.SITE_URL || "http://localhost:3101";
(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.argv[3] ? { executablePath: process.argv[3] } : {}),
  });
  const errors = [];
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1050 },
  });
  page.on("pageerror", (e) => errors.push(e.message));
  async function noOverflow(label) {
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      label,
    );
  }
  await page.goto(base);
  assert.equal(await page.locator(".journey-stages button").count(), 6);
  assert.equal(await page.locator("dialog[open]").count(), 0);
  const firstTopic = page.locator(".journey-subject button").first();
  await firstTopic.click();
  assert.equal(await page.locator("dialog[open]").count(), 1);
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => !document.querySelector("dialog[open]"));
  assert.equal(
    await page.evaluate(() =>
      document.activeElement?.getAttribute("data-topic-id"),
    ),
    "algebra-trigonometry",
  );
  assert.equal(await page.evaluate(() => document.body.style.overflow), "");
  await page.locator(".journey-stages button").last().click();
  await page
    .locator(".journey-subject button")
    .filter({ hasText: "Optimal control & MPC" })
    .click();
  assert.equal(
    await page.locator(".journey-preview h3").innerText(),
    "Optimal control & MPC",
  );
  await page
    .locator(".prerequisite-links button")
    .filter({ hasText: "Linear systems" })
    .click();
  assert.equal(
    await page.locator(".journey-preview h3").innerText(),
    "Linear systems & state-space control",
  );
  assert.equal(
    await page
      .locator('.journey-stages [aria-current="step"] strong')
      .innerText(),
    "Make a robot autonomous",
  );
  await page
    .getByRole("link", { name: "Explore this topic", exact: true })
    .click();
  await page.waitForURL("**/topics/linear-control");
  assert.equal(
    await page.locator("h1").innerText(),
    "Linear systems & state-space control",
  );
  await page.goto(base);
  await page.getByRole("button", { name: "Subject map", exact: true }).click();
  await page.locator(".atlas-node").first().waitFor();
  assert.equal(await page.locator(".atlas-node").count(), subjects.length);
  let count = subjects.length;
  for (const subject of subjects) {
    await page.getByLabel("Jump to subject").selectOption(subject.id);
    const button = page.getByRole("button", {
      name: `Expand ${subject.title}`,
      exact: true,
    });
    await button.focus();
    await button.press("Enter");
    count += subject.children.length;
    await page.waitForFunction(
      (n) => document.querySelectorAll(".atlas-node").length === n,
      count,
    );
    assert.equal(
      await page.evaluate(() =>
        document.activeElement?.getAttribute("aria-expanded"),
      ),
      "true",
    );
  }
  assert.equal(count, subjects.length + topics.length);
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await page.waitForFunction(
    (n) => document.querySelectorAll(".atlas-node").length === n,
    subjects.length,
  );
  await page
    .getByLabel("Jump to subject")
    .selectOption("perception-estimation");
  await page
    .locator(".preview-topics button")
    .filter({ hasText: "Localization & SLAM" })
    .click();
  assert.equal(
    await page.locator(".topic-preview h3").innerText(),
    "Localization & SLAM",
  );
  await page
    .getByRole("link", { name: "Explore this topic", exact: true })
    .click();
  await page.waitForURL("**/topics/slam");
  const paths = [
    "/",
    "/about",
    "/projects",
    "/curriculum",
    ...subjects.map((s) => `/topics/${s.id}`),
    ...topics.map((t) => `/topics/${t.id}`),
    ...builds.map((b) => `/projects/${b.id}`),
  ];
  for (const path of paths) {
    const res = await page.goto(base + path);
    assert.equal(res.status(), 200, path);
    assert.equal(await page.locator("h1").count(), 1, path);
    await noOverflow(path);
  }
  await page.goto(base + "/topics/cad-fabrication");
  await page.locator("summary").click();
  assert.equal(await page.locator("details").getAttribute("open"), "");
  await page.goto(base + "/curriculum");
  assert.equal(
    await page.locator(".curriculum-subject a").count(),
    topics.length,
  );
  assert.equal(await page.locator(".track-grid article").count(), 6);
  for (const path of [
    "/tutorials/first-robot",
    "/topics/not-a-topic",
    "/projects/not-a-build",
  ]) {
    assert.equal((await page.goto(base + path)).status(), 404, path);
  }
  await page.goto(base + "/resources");
  await page.waitForURL("**/#explore");
  if (process.argv[4]) mkdirSync(process.argv[4], { recursive: true });
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base);
    await noOverflow(`home ${width}`);
    if (process.argv[4] && (width === 390 || width === 1440))
      await page.screenshot({
        path: `${process.argv[4]}/journey-${width}.png`,
        fullPage: true,
      });
    await page.locator(".journey-stages button").last().click();
    await page
      .locator(".journey-subject button")
      .filter({ hasText: "Master’s thesis" })
      .click();
    assert.equal(
      await page.locator(".journey-preview h3").innerText(),
      "Master’s thesis or systems project",
    );
    await noOverflow(`graduate journey ${width}`);
    await page.getByRole("button", { name: "Close topic preview" }).click();
    assert.equal(await page.locator("dialog[open]").count(), 0);
    await page
      .getByRole("button", { name: "Subject map", exact: true })
      .click();
    await page
      .getByLabel("Jump to subject")
      .selectOption("electronics-sensing");
    await page
      .locator(".preview-topics button")
      .filter({ hasText: "Sensors & measurement" })
      .click();
    await page.waitForFunction(
      () =>
        document
          .querySelector('[aria-label="Interactive map of robotics subjects"]')
          ?.getAttribute("aria-busy") === "false",
    );
    assert.equal(
      await page.locator(".topic-preview h3").innerText(),
      "Sensors & measurement",
    );
    await noOverflow(`subject map ${width}`);
    if (process.argv[4] && (width === 390 || width === 1440))
      await page
        .locator(".atlas-layout")
        .screenshot({ path: `${process.argv[4]}/atlas-${width}.png` });
    for (const path of [
      "/curriculum",
      "/topics/masters-project",
      "/topics/mathematics-physics",
      "/projects",
      "/projects/programmable-rc-car",
    ]) {
      await page.goto(base + path);
      await noOverflow(`${path} ${width}`);
    }
  }
  const noJS = await browser.newPage({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 900 },
  });
  await noJS.goto(base);
  assert.equal(await noJS.locator("noscript a").count(), subjects.length + 1);
  await noJS.goto(base + "/curriculum");
  assert.equal(
    await noJS.locator(".curriculum-subject a").count(),
    topics.length,
  );
  assert.deepEqual(errors, []);
  await browser.close();
  console.log(
    `PASS: ${paths.length} published routes; 6 learning stages; prerequisite navigation; all 11 subject expansions; topic links; no-JS curriculum; hidden routes; 320/390/768/1440px layouts; no page errors.`,
  );
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
