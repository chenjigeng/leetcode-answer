/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  if (k === 1) return n;
  const dp = []

  for (let i = 0; i <= n; i++) {
    dp[i] = []

    for (let j = 0; j <= k; j++) {
      dp[i][j] = 0;
    }
  }

  for (let j = 0; j <= n; j++) {
    dp[j][1] = j;
  }


  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= k; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] + 1;

      if (dp[i][j] >= n) {
        console.log(i);
        return i;
      }
    }
  }

  // return dp[k][n]
};

// k 个鸡蛋，count 次操作，可以测量的楼层数
// dp[k][count]
// dp[k][count] = Math.min(dp[k - 1][count - 1] + 1, dp[k][count - 1])
// 1 1

// 2 k 


// superEggDrop(2, 6);
// superEggDrop(1, 2);
// superEggDrop(3, 14);
