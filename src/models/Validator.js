const Validator = {
  inputPickNumbers(inputValue) {
    const regex = /[^1-9]/g;
    if (inputValue.length !== 3) return false;
    if (regex.test(inputValue)) return false;
    const setValue = new Set(inputValue);
    if (setValue.size !== inputValue.length) return false;
    return true;
  },

  inputRestartOrEnd(inputValue) {
    if (inputValue !== '1' && inputValue !== '2') return false;
    return true;
  },
};

export default Validator;
