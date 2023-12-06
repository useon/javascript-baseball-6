import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  constructor() {
    this.start();
  }

  start() {
    OutputView.printMessage('숫자 야구 게임을 시작합니다.');
  }

  progress() {
    this.inputPickNumbers();
  }

  async inputPickNumbers() {
    const inputValue = await InputView.readPickNumbers();
  }
}

export default Controller;
