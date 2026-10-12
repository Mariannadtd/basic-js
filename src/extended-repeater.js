const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  str = String(str);
  const additionStr = String(addition);

  let result = "";

  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    for (let k = 0; k < additionRepeatTimes; k++) {
      result += additionStr;

      if (k < additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }

    if (i < repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater,
};
