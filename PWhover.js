//! Наведение на локатор
import test from "playwright/test";

test("Наведение", async ({ page }) => {
  await page.locator("#login").hover();
});
