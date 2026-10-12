const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];
  let previousDeleted = false;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (item === "--discard-prev") {
      if (i > 0 && !previousDeleted) {
        res.pop();
      }
    } else if (item === "--double-prev") {
      if (i > 0 && !previousDeleted) {
        res.push(arr[i - 1]);
      }
    } else if (item === "--discard-next") {
      if (i + 1 < arr.length) {
        previousDeleted = true;
        i++;
      }
    } else if (item === "--double-next") {
      if (i + 1 < arr.length) {
        res.push(arr[i + 1]);
        res.push(arr[i + 1]);
        previousDeleted = false;
        i++;
      }
    } else {
      res.push(item);
      previousDeleted = false;
    }
  }

  return res;
}

module.exports = {
  transform,
};
