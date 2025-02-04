const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const r = {};
  domains.forEach((d) =>
    d
      .split(".")
      .reverse()
      .map((_, i, a) => "." + a.slice(0, i + 1).join("."))
      .forEach((s) => (r[s] = ~~r[s] + 1))
  );
  return r;
}

module.exports = {
  getDNSStats,
};
