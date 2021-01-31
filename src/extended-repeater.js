const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  repeatTimes = options.repeatTimes || 1;
  additionRepeatTimes = options.additionRepeatTimes || 1;
  separator = options.separator || "+";

  if (options.addition === undefined) {
    addition = "";
  } else {
    addition = String(options.addition);
  }

  additionSeparator = options.additionSeparator || "|";

  let result = "";
  for (let index = 0; index < repeatTimes; index++) {
    result += str;

    for (let addIndex = 0; addIndex < additionRepeatTimes; addIndex++) {
      result += addition;

      if (addIndex < additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }

    if (index < repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};
  
