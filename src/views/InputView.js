import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readPickNumbers() {
    const inputValue = await Console.readLineAsync('숫자를 입력해주세요 : ');
    return inputValue;
  },
};

export default InputView;
