const { test, expect } = require("@playwright/test");

test("lesson4_count", async ({ page }) => {
  await page.goto("https://sky-todo-list.herokuapp.com/", {
    waitUntil: "networkidle",
  });

  const storyCount = await page.locator("td").count();
  console.log(storyCount)
});
