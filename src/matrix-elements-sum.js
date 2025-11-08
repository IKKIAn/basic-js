const { NotImplementedError } = require('../lib');

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
  if (!Array.isArray(matrix) || matrix.length === 0) return 0;

  let sum = 0;
  const cols = matrix[0].length;
  const blocked = Array(cols).fill(false); // отмечаем столбцы, где встретился 0

  for (let row of matrix) {
    for (let col = 0; col < cols; col++) {
      if (!blocked[col]) {
        if (row[col] === 0) {
          blocked[col] = true;
        } else {
          sum += row[col];
        }
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};