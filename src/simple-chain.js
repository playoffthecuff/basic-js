const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  c: [],
  getLength() {
    return this.c.length;
  },
  addLink(value) {
    this.c.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      Number.isInteger(position) &&
      position > 0 &&
      position <= this.c.length
    ) {
      this.c.splice(position - 1, 1);
    } else {
      this.c.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.c.reverse();
    return this;
  },
  finishChain() {
    const r = this.c.map((v) => `( ${v} )`).join`~~`;
    this.c.length = 0;
    return r;
  },
};

module.exports = {
  chainMaker,
};
