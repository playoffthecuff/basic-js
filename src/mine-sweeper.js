const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((v, y, arr) =>
    v.map((_v, x) =>
      arr
        .slice(Math.max(0, y - 1), y + 2)
        .map((_v) => _v.slice(Math.max(0, x - 1), x + 2))
        .reduce(
          (a, __v) => a + __v.reduce((_a, ___v) => _a + ___v),
          -matrix[y][x]
        )
    )
  );
}

module.exports = {
  minesweeper,
};
