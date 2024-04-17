//! expect Page:

// проверяем текст вкладки
await expect(page).toHaveTitle("Вот тут ожидаемый текст вкладки");
// проверяем, что сейчас открыт тот адрес, который передан в метод toHaveURL
await expect(page).toHaveURL("Вот тут url, начинающийся с http/https");


//! expect locator:
// проверяем текст элемента
await expect(page.locator("[field=descr]").first()).toHaveText(
    "Помогаем инженерам повысить свою квалификацию на рынке труда и приобрести навыки международного уровня"
  );

// проверяем текст элемента не обращяя внимание на регистр
await expect(page.locator("")).toHaveText("ожидаемый текст", {
  ignoreCase: true,
});


// Массовое сравнение текста
<ul>
  <li>Билли</li>
  <li>Вилли</li>
  <li>Дилли</li>
</ul>

await expect(page.locator("ul > li")).toHaveText(["Билли", "Вилли", "Дилли"]);

// Для того, чтобы проверить, что текст элемента содержит переданную подстроку, мы используем проверку toContainText()
await expect(page.locator("")).toContainText("подстрока");

//* Значит, используем toHaveText(), когда хотим проверить текст на полное соответствие и toContainText() - когда интересует только часть текста.

//! собираем количество

<ul>
  <li>Билли</li>
  <li>Вилли</li>
  <li>Дилли</li>
</ul>
// соберем все элементы, посчитаем их и положим в переменную
const ducksCount = await page.locator(page.locator("ul > li")).count();

// соберем все элементы и проверим, что их 3
await expect(page.locator("ul > li")).toHaveCount(3); 