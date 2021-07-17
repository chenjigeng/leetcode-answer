/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const dp = [];

  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = false;
    }
  }

  let count = 1;
  dp[0][0] = true;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j]) {
        if (i + 1 < m && !dp[i + 1][j]) {
          if (check(i + 1, j, k)) {
            count++;
            dp[i + 1][j] = true;
          }
        }

        if (j + 1 < n && !dp[i][j + 1]) {
          if (check(i, j + 1, k)) {
            count++;
            dp[i][j + 1] = true;
          }
        }
      }
    }
  }

  return count;
};

function check(i, j, k) {
  let result = 0;

  while (i) {
    result += i % 10;
    i = Math.floor(i / 10);
  }

  while (j) {
    result += j % 10;
    j = Math.floor(i / 10);
  }

  return result <= k;
}
