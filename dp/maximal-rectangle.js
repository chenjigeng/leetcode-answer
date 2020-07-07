/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const dp = [];
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
      dp[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = (j === 0 ? 0 : dp[i][j - 1]) + 1;
      } else {
        dp[i][j] = 0;
      }

      let minWidth = dp[i][j];
      for (let k = i; k >= 0; k--) {
        const len = i - k + 1;
        minWidth = Math.min(minWidth, dp[k][j]);
        max = Math.max(max, minWidth * len);
      }
    }
  }

  // console.log(dp)
  // console.log(max);

  return max;
  
};

// arr = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]

// console.log(maximalRectangle(arr))