export class MainPage {
  constructor(page) {
    // вот его нам выдали при создании теста
    this.page = page; // сохраняем локально
    this.cookieAcceptButton = page.locator(".cookie-policy button");
    this.searchField = page.locator("#search-field");
  }

  async openPage() {
    await this.page.goto("https://www.labirint.ru");
    await this.cookieAcceptButton.click();
  }

  async search(text) {
    await this.searchField.fill(text);
    await this.searchField.press("Enter");
  }
}
