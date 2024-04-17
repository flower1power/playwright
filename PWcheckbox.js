//! Чек-бокс

test("Один клик", async ({ page }) => {
  await page.locator("#cb1").check();
  await page.locator("#cb2").uncheck();
});
