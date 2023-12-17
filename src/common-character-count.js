const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const commonChars = Array.from(new Set(arr1)).filter(char => arr2.includes(char));

  const getOccurences = (array, char) => {
    let count = 0;
    for (let item of array) {
      console.log(char, item)
      if (char === item) count++;
    }
    return count;
  }
  let common = 0;
  for (let char of commonChars) {
    const occ1 = getOccurences(arr1, char);
    const occ2 = getOccurences(arr2, char);
    common += Math.min(occ1, occ2)
  }
  return common;
}

module.exports = {
  getCommonCharacterCount
};
