import { test, expect } from '@playwright/test';

test('get image caption', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/hovers');

  await page.locator('.figure').nth(1).hover();

  await expect(page.locator('h5').nth(1)).toHaveText('name: user2');
});
