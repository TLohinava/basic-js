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
  const options = [];
  const stringifiedNum = n.toString();
  for (let i = 0; i < stringifiedNum.length; i++) {
    const option = stringifiedNum.split('');
    option.splice(i, 1);
    options.push(option.join(''))
  }
  return Math.max(...options)
}

module.exports = {
  deleteDigit
};
