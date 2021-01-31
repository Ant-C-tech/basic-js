const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resultChain: [],

  getLength() {
    return this.resultChain.length;
  },
  addLink(value = ' ') {
      this.resultChain.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (
      position === NaN ||
      !(position ^ 0) === position ||
      position < 0 ||
      position > this.resultChain.length
    ) {
      this.resultChain = [];
      throw new Error();
    } else {
      this.resultChain.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain() {
    this.resultChain.reverse();

    return this;
  },
  finishChain() {
    const resultOfChaining = this.resultChain.join("~~");
    this.resultChain = []

    return resultOfChaining;
  },
};

module.exports = chainMaker;
