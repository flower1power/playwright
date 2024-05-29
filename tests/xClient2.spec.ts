import { expect, test } from "playwright/test";
import { allure } from "allure-playwright";
import { Severity } from "allure-js-commons";

test.describe("Тесты на создание компании", async () => {
  test.beforeEach("Авторизоваться", async ({ page }) => {
    await allure.description(
      "Тесты, проверяющие возможность создавать компанию через UI"
    );
    await allure.story("создание компании");
    await allure.owner("Виктор");
    await allure.tags("компании", "создание", "авторизованная зона");
    await allure.severity(Severity.CRITICAL);
    await allure.link(
      "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_659d235d16f1ad2e3975abca_659e574eeb35721ecb8e912b/scale_1200",
      "Требование"
    );
    await allure.issue("BUG-123", "https://example.com/issues/AUTH-123");
    await allure.tms("TMS-456", "https://example.com/tms/TMS-456");

    await allure.step("Открыть страницу", async () => {
      await page.goto("https://qa-stand-employees.inzhenerka.tech");
    });

    await allure.step("Ввести логин", async () => {
      await page.locator("input[type=text]").fill("leonardo");
    });
    await allure.step("Ввести пароль", async () => {
      await page.locator("input[type=password]").fill("leads");
    });
    await allure.step("Нажать кнопку Войти", async () => {
      await page.locator("button[type=submit]").click();
    });
    await allure.step("Дождаться приветсвия", async () => {
      await expect(page.locator("h6").first()).toContainText("👋 Привет, ");
    });
  });

  test(
    "Создание компании со всеми полями",
    {
      tag: ["@Позитивный", "@smoke"],
      annotation: [
        { type: "Критичность", description: "critical" },
        {
          type: "Описание",
          description:
            "Авторизованный пользователь может создать компанию с названием и описанием",
        },
      ],
    },
    async ({ page }) => {
      await page.getByTestId("AddIcon").first().click();
      const form = page.getByRole("dialog");
      await expect(form).toBeVisible();

      await form.locator("input[type=text]").first().fill("Test 1");
      await form.locator("input[type=text]").last().fill("Desc 1");
      await form.getByRole("button", { name: "Добавить" }).click();
      await expect(form).toBeHidden();
    }
  );

  test(
    "Создание компании только с названием",
    {
      tag: "@Позитивный",
      annotation: [
        { type: "Критичность", description: "critical" },
        {
          type: "Описание",
          description:
            "Авторизованный пользователь может создать компанию с названием",
        },
      ],
    },
    async ({ page }) => {
      await page.getByTestId("AddIcon").first().click();
      const form = page.getByRole("dialog");
      await expect(form).toBeVisible();

      await form.locator("input[type=text]").first().fill("Test 1");
      await form.getByRole("button", { name: "Добавить" }).click();
      await expect(form).toBeHidden();
    }
  );

  test(
    "Создание компании только с описанием",

    {
      tag: "@Негативный",
      annotation: [
        { type: "Критичность", description: "critical" },
        {
          type: "Описание",
          description:
            "Авторизованный пользователь не может создать компанию только с описанием",
        },
      ],
    },

    async ({ page }) => {
      await page.getByTestId("AddIcon").first().click();
      const form = page.getByRole("dialog");
      await expect(form).toBeVisible();

      await form.locator("input[type=text]").last().fill("Desc 1");
      await expect(
        form.getByRole("button", { name: "Добавить" })
      ).toBeDisabled();
    }
  );

  test(
    "Создание компании. Пробел, вместо названия",

    {
      tag: "@Негативный",
      annotation: [
        { type: "Критичность", description: "minor" },
        {
          type: "Описание",
          description:
            "Авторизованный пользователь не может создать компанию с пробелом в названии",
        },
      ],
    },
    async ({ page }) => {
      await page.getByTestId("AddIcon").first().click();
      const form = page.getByRole("dialog");
      await expect(form).toBeVisible();

      await form.locator("input[type=text]").first().fill(" ");
      await expect(
        form.getByRole("button", { name: "Добавить" })
      ).toBeDisabled();
    }
  );
});
