const { NotImplementedError } = require("../lib");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let str = n.split("-");

  let letters = ["A", "B", "C", "D", "E", "F"];
  let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (str.length !== 6) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i].length !== 2) {
      return false;
    }

    if (
      !(
        (letters.includes(str[i][0]) || nums.includes(str[i][0])) &&
        (letters.includes(str[i][1]) || nums.includes(str[i][1]))
      )
    ) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isMAC48Address,
};
