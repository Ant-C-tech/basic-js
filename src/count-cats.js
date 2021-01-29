const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let catCount = 0;
  checkArray(matrix);

  function checkArray(array) {
    array.forEach((elem) => {
      if (Array.isArray(elem)) {
        checkArray(elem);
      } else if (elem == "^^") {
        catCount++;
      }
    });
  }

  return catCount;
};
