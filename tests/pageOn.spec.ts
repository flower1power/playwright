import { test } from '@playwright/test';
import { expect } from 'playwright/test';

test('pageOn', async ({ page }) => {
  page.on('dialog', async (content) => {
    const massage = content.message();
    expect(massage).toContain('I am a JS Alert');
    await content.accept();
  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();
});

// test('Page on console', async ({ page }) => {
//   const consoleEvent = page.waitForEvent('console');
//
//   await page.goto(url);
//
//   const eventFried = await consoleEvent;
//
//   await console.log(eventFried.text());
// });

test('download', async ({ page }) => {
  const downloadEvent = page.waitForEvent('download');

  await page.goto('https://the-internet.herokuapp.com/download');
  await page.getByText('img.jpg').click();

  const file = await downloadEvent;

  await file.saveAs('./image.jpg');
});

test('upload', async ({ page }) => {
  const uploadEvent = page.waitForEvent('filechooser');

  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.locator('#file-upload').click();

  const file = await uploadEvent;

  await file.setFiles('./image.jpg');
  await page.locator('#file-submit').click();
});
