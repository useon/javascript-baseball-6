import Validator from '../src/models/Validator.js';

describe('입력값 유효성 검증 테스트', () => {
  test('1-9 범위의 서로 다른 숫자 세 개가 올바르게 입력되었는지 테스트', () => {
    const validValue = ['123', '456', '432', '789', '198'];
    const invalidValue = ['012', '1234', '@@@', '131', '37r', 'null', 'undefined', '0', '555'];
    validValue.forEach((value) => {
      expect(Validator.inputPickNumbers(value)).toBeTruthy();
    });

    invalidValue.forEach((value) => {
      expect(Validator.inputPickNumbers(value)).toBeFalsy();
    });
  });

  test('재시작 여부에 대해 올바르게 입력되었는지 테스트.(1재시작 2종료)', () => {
    const validValue = ['1', '2'];
    const invalidValue = ['7', '0', '11', '22', '12', 'r', 'null', '@', '!'];

    validValue.forEach((value) => {
      expect(Validator.inputRestartOrEnd(value)).toBeTruthy();
    });

    invalidValue.forEach((value) => {
      expect(Validator.inputRestartOrEnd(value)).toBeFalsy();
    });
  });
});
