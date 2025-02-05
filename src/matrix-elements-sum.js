const { NotImplementedError } = require("../extensions/index.js");

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
  return matrix[0]
    .map((_, i) => matrix.map((v) => v[i]))
    .reduce(
      (a, v) =>
        a +
        v.reduce(
          (_a, _v) => (
            _v === 0 && (_a.b = true), _a.b ? _a.r : (_a.r += _v), _a
          ),
          { r: 0, b: false }
        ).r,
      0
    );
}

module.exports = {
  getMatrixElementsSum,
};