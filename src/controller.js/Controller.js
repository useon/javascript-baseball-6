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

  async game() {
    this.userNumbers = await this.inputUserPick();
    this.judgeResult = new Judge(this.userNumbers, this.computerNumbers).judgeResult;
    OutputView.printMessage(this.judgeResult);
    if (this.judgeResult !== '3스트라이크') await this.game();
  }

  async progress() {
    this.computerNumbers = pickRandomNumbers();
    await this.game();
    OutputView.printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.restartOrEnd = this.inputRestartOrEnd();
    if (this.restartOrEnd === 1) this.progress();
    if (this.restartOrEnd === 2) OutputView.printMessage('숫자 야구 게임을 종료합니다.');
  }

  async inputUserPick() {
    const inputValue = await InputView.readPickNumbers();
    const isCorrectInput = Validator.inputPickNumbers(inputValue);
    if (isCorrectInput) return inputValue.split('').map((e) => Number(e));
    if (!isCorrectInput) throw new Error('[ERROR]');
  }

  async inputRestartOrEnd() {
    const inputValue = await InputView.readRestartOrEnd();
    const isCorrectInput = Validator.inputRestartOrEnd(inputValue);
    if (isCorrectInput) return Number(inputValue);
    if (!isCorrectInput) throw new Error('[ERROR]');
  }
}

export default Controller;
