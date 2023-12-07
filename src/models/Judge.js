class Judge {
  #ball;

  #strike;

  #result;

  constructor(userNumbers, computerNumbers) {
    this.#ball = 0;
    this.#strike = 0;
    this.#result = '';
    this.match(userNumbers, computerNumbers);
    this.score();
  }

  match(userNumbers, computerNumbers) {
    userNumbers.forEach((userNumber, index) => {
      if (userNumber === computerNumbers[index]) this.#strike += 1;
      if (userNumber !== computerNumbers[index] && computerNumbers.includes(userNumber)) {
        this.#ball += 1;
      }
    });
  }

  score() {
    if (this.#ball === 0 && this.#strike === 0) this.#result += '낫싱';
    if (this.#ball > 0) this.#result += `${this.#ball}볼 `;
    if (this.#strike > 0) this.#result += `${this.#strike}스트라이크`;
  }

  get judgeResult() {
    return this.#result;
  }
}

export default Judge;
