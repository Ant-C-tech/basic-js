const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  const result = { turns: 0, seconds: 0 };
  result.turns = 2 ** disksNumber - 1
  result.seconds = Math.floor((result.turns / turnsSpeed) * 3600)
  return result
};
