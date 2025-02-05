const { NotImplementedError } = require("../extensions/index.js");

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
  if (Array.isArray(arr)) {
    let f = true;
    const s = ["--double-next", "--double-prev", "--discard-next", "--discard-prev"];
    return arr.reduce((a, v, i, arr) => {
      const next = arr[i + 1];
      if (v === s[0] && arr[i + 1] !== undefined) {
        a.push(next, next);
        f = false;
      } else if (v === s[1] && a[i - 1] !== undefined) {
        a.push(a[i - 1])
      } else if (v === s[2] && next !== undefined) {
        a.push(undefined, undefined);
        f = false;
      } else if (v === s[3] && arr[i - 1] !== undefined) {
        a[i - 1] = undefined;
      } else if (!s.includes(v)) {
        if (f) a.push(v);
        f = true;
      }
      return a;
    }, []).filter(v => v !== undefined);
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
