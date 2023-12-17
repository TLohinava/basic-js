const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let enc = '';
  let char = '';
  let count = 1;
  for (let item of str.split('')) {

    let innerChar = item;

    if (innerChar === char) count++;
    else {
      enc = enc.concat(count > 1 ? count + char : '' + char);
      char = item;
      count = 1;
    }
  }
  enc = enc.concat(count > 1 ? count + char : '' + char);
  return enc;
}

module.exports = {
  encodeLine
};
