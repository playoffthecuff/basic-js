const { NotImplementedError } = require('../extensions/index.js');

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
  const s = '' + n;
  const mi = s.indexOf(Math.max(...s));
  return +s.replace(s[mi ? mi - 1 : mi + 1], '');
}

module.exports = {
  deleteDigit
};
