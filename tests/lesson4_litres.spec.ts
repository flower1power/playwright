import { test, expect } from "@playwright/test";


test("getByTestId", async ({ page }) => {
  await page.goto("https://www.litres.ru");
  await page.getByTestId("search__input").fill("javascript");
  await page.getByTestId("search__button").click();

  await expect(page.getByText("Результаты поиска «javascript»")).toBeVisible();
});
