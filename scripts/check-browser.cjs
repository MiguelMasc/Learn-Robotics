/* eslint-disable @typescript-eslint/no-require-imports -- Portable Node CLI, also run through a Windows runtime. */
/* Run with Node and Playwright; optional argv: module path, Chrome path, screenshot directory. */
const { chromium } = require(process.argv[2] || "playwright");
const assert = require("node:assert/strict");
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
  await page.goto(base);
  await page.locator(".atlas-node").first().waitFor();
  assert.equal(await page.locator(".atlas-node").count(), 4);
  const subjects = [
    "Mechanical design",
    "Electronics & sensing",
    "Programming",
    "Motion & control",
  ];
  for (let i = 0; i < subjects.length; i++) {
    const button = page.getByRole("button", {
      name: `Expand ${subjects[i]}`,
      exact: true,
    });
    await button.focus();
    await button.press("Enter");
    await page.waitForFunction(
      (n) => document.querySelectorAll(".atlas-node").length === n,
      4 + 3 * (i + 1),
    );
    assert.equal(
      await page.evaluate(() =>
        document.activeElement?.getAttribute("aria-expanded"),
      ),
      "true",
    );
  }
  assert.equal(await page.locator(".atlas-node").count(), 16);
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await page.waitForFunction(
    () => document.querySelectorAll(".atlas-node").length === 4,
  );
  await page
    .getByRole("button", { name: "Expand Mechanical design", exact: true })
    .click();
  await page
    .locator(".node-title")
    .filter({ hasText: "CAD & fabrication" })
    .click();
  assert.equal(
    await page.locator(".topic-preview h3").innerText(),
    "CAD & fabrication",
  );
  await page
    .getByRole("link", { name: "Explore this topic", exact: true })
    .click();
  await page.waitForURL("**/topics/cad-fabrication");
  assert.equal(await page.locator("h1").innerText(), "CAD & fabrication");
  await page.locator("summary").click();
  assert.equal(await page.locator("details").getAttribute("open"), "");
  const paths = new Set(["/", "/about", "/projects"]);
  for (const slug of [
    "mechanical-design",
    "electronics-sensing",
    "programming",
    "motion-control",
  ]) {
    await page.goto(`${base}/topics/${slug}`);
    paths.add(`/topics/${slug}`);
    for (const href of await page
      .locator('a[href^="/topics/"],a[href^="/projects/"]')
      .evaluateAll((els) => els.map((e) => e.getAttribute("href"))))
      paths.add(href);
  }
  await page.goto(`${base}/projects`);
  for (const href of await page
    .locator('a[href^="/projects/"]')
    .evaluateAll((els) => els.map((e) => e.getAttribute("href"))))
    paths.add(href);
  for (const path of paths) {
    const res = await page.goto(base + path);
    assert.equal(res.status(), 200, path);
    assert.equal(await page.locator("h1").count(), 1, path);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `overflow ${path}`,
    );
  }
  for (const path of [
    "/curriculum",
    "/tutorials/first-robot",
    "/topics/not-a-topic",
    "/projects/not-a-build",
  ]) {
    const res = await page.goto(base + path);
    assert.equal(res.status(), 404, path);
  }
  await page.goto(base + "/resources");
  await page.waitForURL("**/#explore");
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base);
    await page.waitForTimeout(500);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
      `home overflow at ${width}`,
    );
    await page
      .getByRole("button", {
        name: "Expand Electronics & sensing",
        exact: true,
      })
      .click();
    await page
      .locator(width <= 540 ? ".preview-topics button" : ".node-title")
      .filter({ hasText: "Sensors & measurement" })
      .click();
    assert.equal(
      await page.locator(".topic-preview h3").innerText(),
      "Sensors & measurement",
    );
    if (process.argv[4] && (width === 390 || width === 1440))
      await page.screenshot({
        path: `${process.argv[4]}/home-${width}.jpg`,
        fullPage: true,
        type: "jpeg",
        quality: 68,
      });
    for (const path of [
      "/topics/feedback-pid",
      "/projects",
      "/projects/programmable-rc-car",
    ]) {
      await page.goto(base + path);
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        false,
        `${path} overflow at ${width}`,
      );
    }
    if (process.argv[4] && width === 1440) {
      await page.goto(base + "/topics/feedback-pid");
      await page.screenshot({
        path: `${process.argv[4]}/topic-desktop.jpg`,
        fullPage: true,
        type: "jpeg",
        quality: 68,
      });
    }
  }
  assert.deepEqual(errors, []);
  console.log(
    `PASS: ${paths.size} published routes; hidden routes; keyboard expansion; selection; details; 320/390/768/1440px layouts; no page errors.`,
  );
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
