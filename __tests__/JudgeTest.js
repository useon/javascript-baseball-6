import Judge from '../src/models/Judge.js';

describe('유저가 고른 숫자들과 컴퓨터가 고른 숫자들을 비교하는 클래스를 테스트한다.', () => {
  test('같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱', () => {
    const userNumbersArr = [
      [1, 2, 3],
      [4, 5, 6],
      [3, 7, 8],
      [8, 9, 2],
      [7, 5, 4],
      [3, 8, 9],
      [4, 2, 1],
      [5, 6, 9],
      [1, 9, 8],
    ];
    const computerNumbersArr = [
      [4, 5, 1],
      [3, 6, 5],
      [7, 8, 3],
      [8, 2, 1],
      [5, 7, 4],
      [3, 7, 4],
      [4, 2, 6],
      [5, 6, 9],
      [5, 4, 3],
    ];
    const resultsArr = [
      '1볼 ',
      '2볼 ',
      '3볼 ',
      '1볼 1스트라이크',
      '2볼 1스트라이크',
      '1스트라이크',
      '2스트라이크',
      '3스트라이크',
      '낫싱',
    ];
    userNumbersArr.forEach((userNumbers, index) => {
      expect(new Judge(userNumbers, computerNumbersArr[index]).judgeResult).toBe(resultsArr[index]);
    });
  });
});
