import { test, expect } from "playwright/test";

test("Телега", async ({ request }) => {
  const botToken = "7035378292:AAG3ve2M9w0ibY_maK17lmAXI5Gs7S4hV6M";

  const responseGetMe = await request.get(
    `https://api.telegram.org/bot${botToken}/getMe`
  );
  expect(responseGetMe.ok()).toBeTruthy();

  const responseChatId = await request.get(
    `https://api.telegram.org/bot${botToken}/getUpdates`
  );

  const jsonResponseChatId = await responseChatId.json();
  const chatId = await jsonResponseChatId.result[0].message.chat.id;

  const responseSendMessage = await request.post(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      form: {
        chat_id: chatId,
        text: "Привет, мир! Это сообщение отправлено через мой бот.",
      },
    }
  );

  expect(responseSendMessage.ok()).toBeTruthy();
  console.log(chatId);
});
