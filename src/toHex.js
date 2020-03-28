'use strict';

/**
 * The function takes a number and returns
 * its hexadecimal representation as a lower
 * case string. For example 255 is converted
 * то 'ff'. You should not use .toString() method.
 *
 * Conversion algorithm:
 * Divide the number by 16 with the remainder
 * 50/16 = 3 (remainder 2)
 * 3/16 = 0 (remainder 3)
 * When the whole part is 0, then we take all
 * the remainders in the reverse order
 *
 * 50 === '32'
 *
 * @param {number} value
 *
 * @return {string}
 */
function toHex(value) {
  let result = '';
  let number = value;

  if (number === 0) {
    return '0';
  }

  while (number > 0) {
    const rest = number % 16;
    let hex;

    number = Math.trunc(number / 16);

    switch (rest) {
      case 10: hex = 'a';
        break;
      case 11: hex = 'b';
        break;
      case 12: hex = 'c';
        break;
      case 13: hex = 'd';
        break;
      case 14: hex = 'e';
        break;
      case 15: hex = 'f';
        break;
      default: hex = rest;
        break;
    }

    result = hex + result;
  }

  return result;
}

module.exports = toHex;
