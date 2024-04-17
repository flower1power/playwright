import test from "playwright/test";
//! Клик
test("Один клик", async ({ page }) => {
  await page.locator("css-selector").click();
});

test("Двойной клик", async ({ page }) => {
  await page.locator("css-selector").dblclick();
});

//! Клики с приколами

test("Клик с настройками", async ({ page }) => {
  await page.locator("#clickMe").click({
    button: "right", // какой кнопкой мыши нажать (eft, middle и right)
    modifiers: ["Shift"], // набор кнопок который нужно нажать одновременно с кликом
    position: { x: 10, y: 20 }, // точная позиция внутри локатора
  });
});

// есть еще delay - сколько держать кнопку зажатой
