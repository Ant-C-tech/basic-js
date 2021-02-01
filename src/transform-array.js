const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const resultArray = [];

  for (let index = 0; index < arr.length; index++) {
    if (
      arr[index] !== "--discard-next" &&
      arr[index] !== "--discard-prev" &&
      arr[index] !== "--double-next" &&
      arr[index] !== "--double-prev"
    ) {
      resultArray.push(arr[index]);
    } else if (arr[index] === "--discard-next") {
      index = index + 2;
    } else if (
      arr[index] === "--discard-prev" &&
      arr[index - 1] !== "--discard-next" &&
      arr[index - 1] !== "--discard-prev" &&
      arr[index - 1] !== "--double-next" &&
      arr[index - 1] !== "--double-prev"
    ) {
      resultArray.pop();
    } else if (arr[index] === "--double-next") {
      resultArray.push(arr[index + 1]);
    } else if (arr[index] === "--double-prev") {
      if (
        arr[index - 1] !== "--discard-next" &&
        arr[index - 1] !== "--discard-prev" &&
        arr[index - 1] !== "--double-next" &&
        arr[index - 1] !== "--double-prev"
      ) {
        resultArray.push(arr[index - 1]);
      }
    }
  }

  const result = [];

  resultArray.forEach((element) => {
    if (element !== undefined) {
      result.push(element);
    }
  });

  return result;
};
