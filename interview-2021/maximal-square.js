/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const height = [];
  for (let i = 0; i < matrix.length; i++) {
    height[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (i === 0) {
        height[i][j] = matrix[i][j] === "1" ? 1 : 0;
      } else {
        height[i][j] = matrix[i][j] === "1" ? height[i - 1][j] + 1 : 0;
      }
    }
  }

  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let minHeight = height[i][j];
      for (let k = j; k >= 0; k--) {
        if (matrix[i][k] === "0") {
          break;
        }

        minHeight = Math.min(minHeight, height[i][k]);
        min = Math.min(minHeight, j - k + 1);
        max = Math.max(max, min * min);
      }
    }
  }

  return max;
};

// matrix = [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];

// console.log(maximalSquare(matrix));
