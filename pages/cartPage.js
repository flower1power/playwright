import { expect } from "playwright/test";
export class CartPage {
  constructor(page) {
    this.page = page;
    this.totalPrice = page.locator(".b-dotted-im-e-val").last();
  }

  async openPage(page) {
    await this.page.goto("https://www.labirint.ru/cart/");
  }


  async expectTotalPrice(price) {
    await expect(this.totalPrice).toHaveText(price);
  }
}
