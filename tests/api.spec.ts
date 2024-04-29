import { test, expect } from "@playwright/test";

test("Отправка запроса", async ({ request }) => {
  // отправлем GET-запрос
  const response = await request.get("https://todo-app-sky.herokuapp.com");

  // достаем из ответа статус-код
  const status = await response.status();
  // достаем из ответа тело
  const body = await response.json();

  console.log(status);
  console.log(body);
});

test("Создание задачи", async ({ request }) => {
  const todoTitle: string = "Изучить ApiRequestContext";
  const todo = {
    title: todoTitle,
  };

  const response = await request.post("https://todo-app-sky.herokuapp.com", {
    data: todo,
  });

  const body = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(body["title"]).toEqual(todoTitle);
});
