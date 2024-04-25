import { expect, Locator, Page } from "playwright/test";

export class ResultPage {
  page: Page;
  cards: Locator;
  textNotItems: Locator;
  price: String;
  constructor(page) {
    this.page = page;
    this.cards = page.locator(".product-card");
    this.textNotItems = page.locator(".search-error");
  }

  async getPriceForItem(index) {
    const price = await this.cards
      .nth(index)
      .locator(".product-card__price-current")
      .textContent();
    price !== null ? price.trim() : null;
    return price;
  }

  async addItemToCard(index) {
    await this.cards.nth(index).locator(".buy-link").click();
  }

  async checkNoItem() {
    const textError = await this.textNotItems.textContent();
    await expect(textError).toContain(
      "Мы ничего не нашли по вашему запросу! Что делать?"
    );
  }
}
