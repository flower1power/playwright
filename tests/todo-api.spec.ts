import { test, expect } from "@playwright/test";
import fs from "fs";

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

test("Переименовать задачу", async ({ request }) => {
  const todoTitle: string = "Новое имя";
  const todo = {
    title: todoTitle,
  };

  const response = await request.patch(
    "https://todo-app-sky.herokuapp.com/111697",
    {
      data: todo,
    }
  );

  const body = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(body["title"]).toEqual(todoTitle);
});

test("Завершить задачу", async ({ request }) => {
  const completed = {
    completed: true,
  };

  const response = await request.patch(
    "https://todo-app-sky.herokuapp.com/111697",
    {
      data: completed,
    }
  );

  const body = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(body["completed"]).toBeTruthy();
});

test("Создание задачи2", async ({ request }) => {
  const todoTitle: string = "Изучить ApiRequestContext";
  const todo = {
    title: todoTitle,
  };

  const response = await request.post("https://todo-app-sky.herokuapp.com", {
    data: todo,
  });

  expect(response.status()).toBe(201);
});

test("Сохраняем ответ", async ({ request }) => {
  const url: string = "https://google.com/search?q=playwright";

  const response = await request.get(url);

  expect(response.status()).toBe(200);

  const body = await response.text();

  fs.writeFileSync("index.html", body);
});

test("JSON", async ({ request }) => {
  const url: string = "https://todo-app-sky.herokuapp.com";
  const todoTitle: string = "Новая задача";
  const title = {
    title: todoTitle,
  };

  const response = await request.post(url, { data: title });

  await expect(response.status()).toBe(201);

  const json = await response.json();

  await expect(json["completed"]).toBeFalsy();
  await expect(json["id"] > 0).toBeTruthy();
});
