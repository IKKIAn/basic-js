const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let catCount = 0;
  backyard.flat().forEach(item => {
    if (item === '^^') {
      catCount++;
    }
  });
  return catCount;
}

module.exports = {
  countCats
};
