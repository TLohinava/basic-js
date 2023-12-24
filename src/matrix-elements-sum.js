const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let index = 0;

  const maxIndex = Math.max(...matrix.map(item => item.length))
  while (index < maxIndex) {

    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][index] === 0) break;
      sum += matrix[i][index];
    }
    index += 1;
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
