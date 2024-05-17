import type {FullConfig, FullResult, Reporter, Suite, TestCase, TestResult} from '@playwright/test/reporter';
  
  class MyReporter implements Reporter {
    onBegin(config: FullConfig, suite: Suite) {
      console.log(`Запускаем тестовый прогон ${suite.allTests().length} tests`);
    }
  
    onTestBegin(test: TestCase, result: TestResult) {
      console.log(`Запускаем тест ${test.title}`);
    }
  
    onTestEnd(test: TestCase, result: TestResult) {
      console.log(`Закончили тест ${test.title}: ${result.status}`);
    }
  
    onEnd(result: FullResult) {
      console.log(`Закончили прогон: ${result.status}`);
    }
  }
  
  export default MyReporter;