const { test, expect } = require("@playwright/test");

//! По тексту
test("test", async ({ page }) => {
  await page.getByText("Text").click();
});

//! По плейсхолдеру
test("test", async ({ page }) => {
  await page.getByPlaceholder("Login").fill("admin");
  await page.getByPlaceholder("Password").fill("password");
});

//! По daTestId

test("test", async ({ page }) => {
  await page.getByTestId("dataTestId").click();
});
