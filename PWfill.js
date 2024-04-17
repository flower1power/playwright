//! Заполнение полей
import test from "playwright/test";

test("Заполнение поля", async ({ page }) => {
  await page.locator("#login").fill("User1");
});
