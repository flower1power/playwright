import { test } from '@playwright/test';

test('screenshot', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/sampleapp');

  await page.screenshot({ path: 'body.png' });

  await page
    .locator('.container')
    .first()
    .screenshot({ path: 'container.png' });
});
