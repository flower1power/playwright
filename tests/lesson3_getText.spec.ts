import { test, expect } from '@playwright/test';

test('getText', async ({ page }) => {
  await page.goto('https://inzhenerka.tech/');

  // await page.locator('[field=descr]')
  await expect(await page.locator('[field=descr]').first()).toHaveText(
    'Помогаем инженерам повысить свою квалификацию на рынке труда и приобрести навыки международного уровня'
  );
  await expect(await page.locator('[field=title]').nth(1)).toContainText(
    'ИнженеркаТех'
  );
});
