/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let left = matrix[0][0], right = matrix[matrix.length - 1][matrix[0].length - 1];

  while (left < right) {
    const mid = (left + right) / 2;
    const count = findNoBiggerCount(matrix, matrix[mid]);

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
};

/**
 *
 * @param {number[][]} matrix
 * @param {number} num
 */
function findNoBiggerCount(matrix, num) {
  let row = matrix.length;
  let col = matrix[0].length;
  let i = row - 1, j = 0;
  let count = 0;

  while (i < row && col >= 0) {
    if (matrix[i][j] <= num) {
      count += i + 1;
      j++;
    } else {
      i--;
    }
  }

  return count;
}