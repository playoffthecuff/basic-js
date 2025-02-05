const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  direct = true;
  d = "A".charCodeAt();
  l = "Z".charCodeAt() - this.d + 1;
  
  constructor(d) {
    if (typeof d === "boolean") this.direct = d;
  }
  
  t() {
    throw new Error("Incorrect arguments!");
  }
  
  k(m, k) {
    let keyIndex = 0;
    k = k.toUpperCase();
    return [...m].map((char) => {
      if (/[A-Z]/.test(char)) {
        const keyChar = k[keyIndex % k.length];
        keyIndex++;
        return keyChar;
      }
      return char;
    }).join("");
  }
  
  encrypt(message, key) {
    if (!arguments[0] || !arguments[1]) this.t();
    key = this.k(message.toUpperCase(), key);
    message = message.toUpperCase();

    const p = [...message].map((char, i) => {
      if (/[A-Z]/.test(char)) {
        return String.fromCharCode(
          this.d + ((char.charCodeAt() + key[i].charCodeAt() - 2 * this.d) % this.l)
        );
      }
      return char;
    }).join("");

    return this.direct ? p : [...p].reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!arguments[0] || !arguments[1]) this.t();
    key = this.k(encryptedMessage.toUpperCase(), key);
    encryptedMessage = encryptedMessage.toUpperCase();

    const p = [...encryptedMessage].map((char, i) => {
      if (/[A-Z]/.test(char)) {
        return String.fromCharCode(
          this.d + ((char.charCodeAt() - key[i].charCodeAt() + this.l) % this.l)
        );
      }
      return char;
    }).join("");

    return this.direct ? p : [...p].reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
