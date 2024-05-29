import {expect, test} from "playwright/test";

test.describe("Тесты на создание компании", async () => {
  test.beforeEach("Авторизоваться", async ({page}) => {
    await page.goto("https://qa-stand-employees.inzhenerka.tech");

    await page.locator("input[type=text]").fill("leonardo");
    await page.locator("input[type=password]").fill("leads");
    await page.locator("button[type=submit]").click();
    await expect(page.locator("h6").first()).toContainText("👋 Привет, ");
  });

  test(
    "Создание компании со всеми полями",
    {
      tag: ["@Позитивный", "@smoke"],
      annotation: [
        {type: "Критичность", description: "critical"},
        {
          type: "Описание",
          description:
            "Авторизованный пользователь может создать компанию с названием и описанием",
        },
      ],
    },
    async ({page}) => {
      await page.getByTestId("AddIcon").first().click();
      const form = page.getByRole("dialog");
      await expect(form).toBeVisible();

      await form.locator("input[type=text]").first().fill("Test 1");
      await form.locator("input[type=text]").last().fill("Desc 1");
      await form.getByRole("button", {name: "Добавить"}).click();
      await expect(form).toBeHidden();
    }
  );

  test(
    "Создание компании только с названием",
    {
      tag: "@Позитивный",
      annotation: [
        {type: "Критичность", description: "critical"},
        {
          type: "Описание",
          description:
            "Авторизованный пользователь может создать компанию с названием",
        },
      ],
    },
    async ({page}) => {
      await page.getByTestId("AddIcon").first().click();
      const form = page.getByRole("dialog");
      await expect(form).toBeVisible();

      await form.locator("input[type=text]").first().fill("Test 1");
      await form.getByRole("button", {name: "Добавить"}).click();
      await expect(form).toBeHidden();
    }
  );

  test(
    "Создание компании только с описанием",

    {
      tag: "@Негативный",
      annotation: [
        {type: "Критичность", description: "critical"},
        {
          type: "Описание",
          description:
            "Авторизованный пользователь не может создать компанию только с описанием",
        },
      ],
    },

    async ({page}) => {
      await page.getByTestId("AddIcon").first().click();
      const form = page.getByRole("dialog");
      await expect(form).toBeVisible();

      await form.locator("input[type=text]").last().fill("Desc 1");
      await expect(
        form.getByRole("button", {name: "Добавить"})
      ).toBeDisabled();
    }
  );

  test(
    "Создание компании. Пробел, вместо названия",

    {
      tag: "@Негативный",
      annotation: [
        {type: "Критичность", description: "minor"},
        {
          type: "Описание",
          description:
            "Авторизованный пользователь не может создать компанию с пробелом в названии",
        },
      ],
    },
    async ({page}) => {
      await page.getByTestId("AddIcon").first().click();
      const form = page.getByRole("dialog");
      await expect(form).toBeVisible();

      await form.locator("input[type=text]").first().fill(" ");
      await expect(
        form.getByRole("button", {name: "Добавить"})
      ).toBeDisabled();

    }
  );
});


test("tttr", async () => {

})