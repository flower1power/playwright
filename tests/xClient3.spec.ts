import { expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';

const url = 'https://qa-stand-employees.inzhenerka.tech';
const login = 'leonardo';
const pass = 'leads';

test.describe('Создание компании', async () => {
  test.beforeEach('Авторизоваться', async ({ page }) => {
    await allure.step('Авторизация на сайте', async () => {
      await page.goto(url);
      await page.locator('input[type=text]').fill(login);
      await page.locator('input[type=password]').fill(pass);
      await page.locator('button[type=submit]').click();
      await expect(page.locator('h6').first()).toContainText('👋 Привет, ');
    });
  });

  test('Создание компании только с названием', async ({ page }) => {
    const requestEvent = await page.waitForRequest(
      (request) =>
        request.url().endsWith('/company') && request.method() === 'POST'
    );

    await page.getByTestId('AddIcon').first().click();
    const form = page.getByRole('dialog');
    await expect(form).toBeVisible();

    await form.locator('input[type=text]').first().fill('Test 2');
    await form.getByRole('button', { name: 'Добавить' }).click();

    const request = await requestEvent;
    expect(request.postDataJSON()).toEqual({ name: 'Test 2', description: '' });
  });
});

test('Auth test', async ({ page }) => {
  await page.goto(url);

  const responseEvent = await page.waitForResponse(
    (response) => response.url().endsWith('/login') && response.status() < 300
  );

  await allure.step('Авторизация на сайте', async () => {
    await page.locator('input[type=text]').fill(login);
    await page.locator('input[type=password]').fill(pass);
    await page.locator('button[type=submit]').click();
    await expect(page.locator('h6').first()).toContainText('👋 Привет, ');
  });

  const response = await responseEvent;
  const responseBody = response.json();

  // @ts-ignore
  expect(responseBody['role']).toStrictEqual('admin');
  // @ts-ignore
  expect(responseBody['displayName']).toStrictEqual(login);
  // @ts-ignore
  expect(responseBody['login']).toStrictEqual(login);
  // @ts-ignore
  expect(responseBody['userToken']).not.toBeNull();

  await expect(page.locator('h6').first()).toHaveText(`👋 Привет, ${login}`);
});

test('Список компаний', async ({ page }) => {
  const responseEvent = page.waitForResponse(
    (response) => response.url().endsWith('/company') && response.status() < 300
  );

  await page.goto('https://qa-stand-employees.inzhenerka.tech');

  const response = await responseEvent;
  const responseBody = await response.json();

  await page.locator('.MuiListItemIcon-root').first().click();

  const modal = page.locator('.MuiDialog-paper');

  await expect(
    modal.locator('.MuiTypography-h6.MuiCardHeader-title')
  ).toHaveText(responseBody[0]['name']);

  await expect(
    modal.locator('.MuiTypography-root.MuiTypography-body1')
  ).toHaveText(responseBody[0]['description']);

  await expect(modal.locator('.MuiChip-labelMedium')).toHaveText('Активна');
  expect(responseBody[0]['isActive']).toBeTruthy();
});
