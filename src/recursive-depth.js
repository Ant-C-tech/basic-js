const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    let depth = 1;
    let maxLevelForBranch = 1;
    checkFlatArray(arr);

    function checkFlatArray(array) {
      array.forEach((element) => {
        if (Array.isArray(element)) {
          maxLevelForBranch++;
          checkFlatArray(element);
        }
      });
      if (maxLevelForBranch > depth) {
        depth = maxLevelForBranch;
      }
      maxLevelForBranch--;
    }
    return depth;
  }
};
};
