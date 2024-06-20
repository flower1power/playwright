import { test, expect } from '@playwright/test';

test('placeholder', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByText('Login').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
