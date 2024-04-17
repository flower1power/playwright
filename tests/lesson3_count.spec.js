const { test, expect } = require("@playwright/test");

test("count", async ({ page }) => {
  await page.goto("https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=240");

  expect(await page.locator("li.s-item[data-gr4]").count()).toEqual(240);

  await page.goto("https://www.ebay.com/sch/i.html?_nkw=nike&_ipg=120");

  expect(await page.locator("li.s-item[data-gr4]").count()).toEqual(120);

  // await expect()
});
