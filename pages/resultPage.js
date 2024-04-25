export class ResultPage {
  constructor(page) {
    this.page = page;
    this.cards = page.locator(".product-card");
    // this.priceText = cards.locator(".product-card__price-current");
    // this.buyButton = cards.locator(".buy-link");
  }

  async getPriceForItem(index) {
    const price = await this.cards
      .nth(index)
      .locator(".product-card__price-current")
      .textContent();

    return price.trim();
  }

  async addItemToCard(index) {
    await this.cards.nth(index).locator(".buy-link").click();
  }
}
