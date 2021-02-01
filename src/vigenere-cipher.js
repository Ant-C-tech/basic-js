const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machineType) {
    this.machineType = machineType;
  }

  encrypt(message, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    if (!message || !key) {
      throw new Error();
    }

    if (this.machineType === false) {
      return message.split("").reverse().join("").toUpperCase();
    } else {
      return message.toUpperCase();
    }
  }
  decrypt(encryptedMessage, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    if (!encryptedMessage || !key) {
      throw new Error();
    }

    if (this.machineType === false) {
      return encryptedMessage.split("").reverse().join("").toUpperCase();
    } else {
      return encryptedMessage.toUpperCase();
    }

  }
}

module.exports = VigenereCipheringMachine;
