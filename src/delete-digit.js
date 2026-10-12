const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = [];
  let x = n.toString();

  for (let i = 0; i < x.length; i++) {
    let y = x.slice(0, i) + x.slice(i + 1);
    res.push(Number(y));
  }

  res.sort((a, b) => b - a);

  return res[0];
}

module.exports = {
  deleteDigit,
};
