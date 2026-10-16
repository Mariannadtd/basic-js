const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let res = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (char >= "A" && char <= "Z") {
        let letterCode = char.charCodeAt(0) - 65;
        let keyCode = key[keyIndex % key.length].charCodeAt(0) - 65;

        let newCode = (letterCode + keyCode) % 26;

        res += String.fromCharCode(newCode + 65);

        keyIndex++;
      } else {
        res += char;
      }
    }

    if (!this.direct) {
      res = res.split("").reverse().join("");
    }

    return res;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let res = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let char = encryptedMessage[i];

      if (char >= "A" && char <= "Z") {
        let letterCode = char.charCodeAt(0) - 65;
        let keyCode = key[keyIndex % key.length].charCodeAt(0) - 65;

        let newCode = (letterCode - keyCode + 26) % 26;

        res += String.fromCharCode(newCode + 65);

        keyIndex++;
      } else {
        res += char;
      }
    }

    if (!this.direct) {
      res = res.split("").reverse().join("");
    }

    return res;
  }
}

module.exports = {
  VigenereCipheringMachine,
};

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
