import { test, expect } from "playwright/test";

test("Добавление ожидания", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/ajax");
  await page.locator("#ajaxButton").click();
  //# - id
  //. - class
  const textContent = await page
    .locator(".bg-success")
    .textContent({ timeout: 20000 });
  await expect(textContent).toContain("Data loaded with AJAX get request.");
});
