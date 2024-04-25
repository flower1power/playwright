import { test, expect } from "@playwright/test";

test("fill", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/sampleapp");

  await page.getByPlaceholder("User Name").fill("testLogin");
  await page.getByPlaceholder("********").fill("pwd");
  await page.getByRole('')

  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByText("Welcome, testLogin!").isVisible();
});
