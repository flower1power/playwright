import { expect, Locator, Page } from "playwright/test";
export class CartPage {
  page: Page;
  totalPrice: Locator;
  textNullCard: Locator;
  constructor(page) {
    this.page = page;
    this.totalPrice = page.locator(".b-dotted-im-e-val").last();
    this.textNullCard = page
      .locator(".g-alttext-small.g-alttext-grey.g-alttext-head")
      .first();
  }

  async openPage() {
    await this.page.goto("https://www.labirint.ru/cart/");
  }

  async expectTotalPrice(price) {
    await expect(this.totalPrice).toHaveText(price);
  }

  async expectTextNullCard() {
    const textNullCart = await this.textNullCard.textContent();
    await expect(textNullCart).toContain("Ваша корзина пуста. Почему?");
  }
}
