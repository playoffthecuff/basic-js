const { NotImplementedError } = require("../extensions/index.js");

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
function countCats(matrix, cat = "^^") {
  return matrix
    .map((a) => a.filter((v) => v === cat))
    .reduce((a, v) => a + v.length, 0);
}

module.exports = {
  countCats,
};
