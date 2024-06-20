import { test, expect } from 'playwright/test';

test('lesson8', async ({ page }) => {
  await page.goto('https://www.labirint.ru');
  await page.locator('.cookie-policy__button').click();
  await page.locator('[id=search-field]').fill('Эйяфьядлайёкюдль');
  await page.locator('[id=search-field]').press('Enter');
  const textError = await page.locator('.search-error').textContent();
  await expect(textError).toContain(
    'Мы ничего не нашли по вашему запросу! Что делать?'
  );
  await page.locator('.b-header-b-personal-e-icon-m-cart').click();
  const textNullCart = await page
    .locator('.g-alttext-small.g-alttext-grey.g-alttext-head')
    .first()
    .textContent();

  expect(textNullCart).toContain('Ваша корзина пуста. Почему?');
});
