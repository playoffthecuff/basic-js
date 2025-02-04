const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  try {
    return members
    .filter((v) => typeof v === "string")
    .map((v) => v.trim()[0].toUpperCase())
    .sort().join``;
  } catch {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
