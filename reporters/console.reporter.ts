import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from "@playwright/test/reporter";
import axios from "axios";
import { request } from "playwright/test";

const botToken = "7035378292:AAG3ve2M9w0ibY_maK17lmAXI5Gs7S4hV6M";
const chatId = "334886985";

async function sendMessage(message: string) {
  await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    chat_id: chatId,
    text: message,
  });
}

class MyReporter implements Reporter {
  async onBegin(config: FullConfig, suite: Suite) {
    const massage = `Запускаем тестовый прогон ${
      suite.allTests().length
    } тестов`;
    console.log(massage);
    await sendMessage(massage);
  }

  onTestBegin(test: TestCase, result: TestResult) {
    const massage = `Запускаем тест ${test.title}`;
    console.log(massage);
  }

  async onTestEnd(test: TestCase, result: TestResult) {
    const massage = `Закончили тест ${test.title}: ${result.status}`;

    console.log(massage);
    await sendMessage(massage);

    const duration = `Время выполнения теста: ${result.duration} мс`;
    console.log(duration);
  }

  async onEnd(result: FullResult) {
    const massage = `Закончили прогон: ${result.status}`;
    const totalDuration = `Общее время выполнения: ${result.duration} мс`;
    await sendMessage(massage);
    await sendMessage(totalDuration);
    console.log(massage);
    console.log(totalDuration);
  }
}

export default MyReporter;
