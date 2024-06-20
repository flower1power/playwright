import { test } from 'playwright/test';
import { MainPage } from '../pages/mainPage'; // импортнули наш класс
import { ResultPage } from '../pages/resultPage';
import { CartPage } from '../pages/cartPage';

test('Поиск по сайту', async ({ page }) => {
  // создаем новый экземпляр и прокидываем в него page
  const mainPage = new MainPage(page);
  const resultPage = new ResultPage(page);
  const cartPage = new CartPage(page);
  // а вот и наши методы работы со страницей
  await mainPage.openPage();
  await mainPage.search('javascript');

  const priceToBe = await resultPage.getPriceForItem(0);
  await resultPage.addItemToCard(0);

  await cartPage.openPage();
  await cartPage.expectTotalPrice(priceToBe);
});

test('lesson8', async ({ page }) => {
  const mainPage = new MainPage(page);
  const resultPage = new ResultPage(page);
  const cartPage = new CartPage(page);

  await mainPage.openPage();
  await mainPage.search('Эйяфьядлайёкюдль');

  await resultPage.checkNoItem();

  await cartPage.openPage();
  await cartPage.expectTextNullCard();
});
