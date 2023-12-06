import OutputView from '../views/OutputView.js';

class Controller {
  constructor() {
    this.start();
  }

  start() {
    OutputView.printMessage('숫자 야구 게임을 시작합니다.');
  }

  progress() {}
}

export default Controller;
