import { test } from '@playwright/test';

test('lesson4_count', async ({ page }) => {
  await page.goto('https://sky-todo-list.herokuapp.com/', {
    waitUntil: 'networkidle',
  });

  await page.locator('td').count();
});
