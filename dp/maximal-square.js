/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const dp = [];
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    dp[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = 1;
        max = 1;
      } else {
        dp[i][j] = 0;
      }
    }
  }


  for (let i = matrix.length - 2; i >= 0; i--) {
    for (let j = matrix[0].length - 2; j >= 0; j--) {
      const right = dp[i][j + 1], bottom = dp[i + 1][j], leftBottom = dp[i + 1][j + 1];

      // console.log(i, j, right, bottom, leftBottom);
      const min = Math.min(right, bottom, leftBottom);
      if (min > 0) {
        if (matrix[i][j] === '1') {
          dp[i][j] = min + 1;
        }
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  // console.log(max);
  // console.log(dp)
  return max * max;
};

// 1 1 1 1 
// 1 1 1 1 
// 1 1 1 1
// maximalSquare([["1","1","1","1"],["1","1","1","1"],["1","1","1","1"]]);