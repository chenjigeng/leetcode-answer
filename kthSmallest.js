/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let left = matrix[0][0], right = matrix[matrix.length - 1][matrix[0].length - 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    const c = count(matrix, mid);

    console.log('c', c, mid)
    if (c < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
function count(matrix, target) {
  let count = 0;
  let col = 0,  row = matrix.length - 1;
  while (col >= 0 && col < matrix[0].length && row >= 0 && row < matrix.length) {
    if (target >= matrix[row][col]) {
      count += row + 1;
      col++;
    } else {
      row--;
    }
  }
  return count;
}

// matrix = [
//   [ 1,  5,  9],
//   [10, 11, 13],
//   [12, 13, 15]
// ],
// k = 8;

// console.log(kthSmallest(matrix, k))