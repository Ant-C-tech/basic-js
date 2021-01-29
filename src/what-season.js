const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (date === undefined) {
    return "Unable to determine the time of year!";
  } else if (!isNaN(date)) {
    const month = new Date(Date.parse(date)).getMonth();
    if (month < 2 || month === 11) {
      return "winter";
    } else if (month < 5) {
      return "spring";
    } else if (month < 8) {
      return "summer";
    } else if (month < 11) {
      return "autumn";
    }
  } else {
    throw new Error();
  }
};
