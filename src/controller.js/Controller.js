import Judge from '../models/Judge.js';
import Validator from '../models/Validator.js';
import pickRandomNumbers from '../utils/pickRandomNumbers.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  constructor() {
    this.start();
  }

  start() {
    OutputView.printMessage('숫자 야구 게임을 시작합니다.');
  }

  async progress() {
    this.userNumbers = await this.inputUserPick();
    this.computerNumbers = pickRandomNumbers();
  }

  async inputUserPick() {
    const inputValue = await InputView.readPickNumbers();
    const isCorrectInput = Validator.inputPickNumbers(inputValue);
    if (isCorrectInput) return inputValue.split('').map((e) => Number(e));
    if (!isCorrectInput) throw new Error('[ERROR]');
  }
}

export default Controller;
