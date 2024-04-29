import { test, expect } from "@playwright/test";
import fs from "fs";
import { title } from "process";

test("Создание задачи", async ({ request }) => {
  const name: string = "Создание задачи";
  const todo = {
    title: name,
  };

  const response = await request.post("https://todo-app-sky.herokuapp.com", {
    data: todo,
  });

  const body = await response.json();

  expect(response.status()).toBe(201);
  expect(body["completed"]).toBeFalsy();
  expect(body["id"] > 0).toBeTruthy();
});

test("Создание задачи2", async ({ request }) => {
  const url: string = "https://todo-app-sky.herokuapp.com";
  const name: string = "Создание задачи";
  const todo = {
    title: name,
  };

  const response = await request.post(url, {
    data: todo,
  });

  const responseJson = await response.json();

  const id = await responseJson["id"];

  const getStoryfromId = await request.get(`${url}/${id}`);

  const body = await getStoryfromId.json();

  expect(getStoryfromId.status()).toBe(200);
  expect(body["completed"]).toBeFalsy();
  expect(body["id"]).toBe(id);
  expect(body["title"]).toBe(name);
});

test("Переименовать", async ({ request }) => {
  const url: string = "https://todo-app-sky.herokuapp.com";
  const name: string = "Создание задачи";
  const newName: string = "Новое имя";

  const todo = {
    title: name,
  };

  const response = await request.post(url, {
    data: todo,
  });

  const responseJson = await response.json();
  const id = await responseJson["id"];

  const rename = await request.patch(`${url}/${id}`, {
    data: { title: newName },
  });
  const bodyRename = await rename.json();

  expect(rename.ok()).toBeTruthy();
  expect(bodyRename["title"]).toBe(newName);
});

test("Завершить", async ({ request }) => {
  const url: string = "https://todo-app-sky.herokuapp.com";
  const name: string = "Создание задачи";
  const todo = {
    title: name,
  };

  const response = await request.post(url, {
    data: todo,
  });

  const responseJson = await response.json();
  const id = await responseJson["id"];

  const completed = await request.patch(`${url}/${id}`, {
    data: { completed: true },
  });
  const bodyRename = await completed.json();

  expect(completed.ok()).toBeTruthy();
  expect(bodyRename["completed"]).toBeTruthy();
});

test("Список задач", async ({ request }) => {
  const url: string = "https://todo-app-sky.herokuapp.com";
  const name: string = "Создание задачи";
  const todo = {
    title: name,
  };

  const response = await request.get(url);
  expect(response.status()).toBe(200);

  const json = await response.json();
  const countItems = await json.length;

  for (const item of json) {
    expect(item["id"]).not.toBeNull();
  }

  expect(countItems > 4).toBeTruthy();
});
