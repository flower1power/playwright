import { test, expect } from '@playwright/test';

test('Нажатие кнопок', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/textinput');
  await page.locator('#newButtonName').fill('Abc');

  await page.locator('#newButtonName').press('Meta+a');
  await page.locator('#newButtonName').press('Meta+x');
  await page.locator('#newButtonName').press('Meta+v');
  await page.locator('#newButtonName').press('Meta+v');
  await page.locator('#newButtonName').press('Meta+v');

  await page.locator('#updatingButton').click();
  await expect(page.locator('#updatingButton')).toHaveText('AbcAbcAbc');
});
