import { test, expect } from "playwright/test";

test("Ожидание на goto", async ({ page }) => {
  await page.goto("https://habr.com/ru/feed/", { timeout: 10000 });
  const textH1 = await page.locator(".tm-section-name__text").textContent();
  await expect(textH1).toContain("Моя лента");
});
