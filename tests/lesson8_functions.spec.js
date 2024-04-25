import { test } from "playwright/test";
import { MainPage } from "../pages/mainPage"; // импортнули наш класс
import { ResultPage } from "../pages/resultPage";
import { CartPage } from "../pages/cartPage";

test("Поиск по сайту", async ({ page }) => {
  // создаем новый экземпляр и прокидываем в него page
  const mainPage = new MainPage(page);
  const resultPage = new ResultPage(page);
  const cartPage = new CartPage(page);
  // а вот и наши методы работы со страницей
  await mainPage.openPage();
  await mainPage.search("javascript");

  const priceToBe = await resultPage.getPriceForItem(0);
  await resultPage.addItemToCard(0);

  await cartPage.openPage();
  await cartPage.expectTotalPrice(priceToBe);
});

// test("lesson8", async ({ page }) => {
//   const mainPage = new MainPage(page);
//   mainPage.openPage();
//   mainPage.search("Эйяфьядлайёкюдль");

//   const textError = await page.locator(".search-error").textContent();
//   await expect(textError).toContain(
//     "Мы ничего не нашли по вашему запросу! Что делать?"
//   );
//   await goToCart(page);
//   const textNullCart = await page
//     .locator(".g-alttext-small.g-alttext-grey.g-alttext-head")
//     .first()
//     .textContent();
//   expect(textNullCart).toContain("Ваша корзина пуста. Почему?");
// });
