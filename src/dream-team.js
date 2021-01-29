const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (members && members.length != 0 && Array.isArray(members)) {
    const teamName = [];
    members.forEach((element) => {
      if (typeof element === "string") {
        teamName.push(element.trim()[0].toUpperCase());
      }
    });
    return teamName.sort().join("");
  } else {
    return false;
  }
};
