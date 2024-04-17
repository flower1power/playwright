//! нажатие на кнопки
import test from "playwright/test";

test("Один клик", async ({ page }) => {
  await page.locator("css-selector").press("Enter");
});
