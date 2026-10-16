const { NotImplementedError } = require("../lib");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  let blocked = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (blocked.includes(k)) {
        continue;
      }

      if (matrix[i][k] === 0) {
        blocked.push(k);
      } else {
        res += matrix[i][k];
      }
    }
  }

  return res;
}

module.exports = {
  getMatrixElementsSum,
};
