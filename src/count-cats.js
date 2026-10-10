const { NotImplementedError } = require("../lib");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = matrix.reduce((acc, item) => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === "^^") {
        acc += 1;
      }
    }
    return acc;
  }, 0);
  return result;
  throw new NotImplementedError("Not implemented");
}

module.exports = {
  countCats,
};
