/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  const dp = [];

  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    for (let j = 0; j < s.length; j++) {
      dp[i][j] = false;
    }

    dp[i][i] = true;
    count++;
  }

  for (let step = 1; step < s.length; step++) {
    for (let j = 0; j + step < s.length; j++) {
      if (s[j] === s[j + step]) {
        if (step === 1 || dp[j + 1][j + step - 1]) {
          if (dp[j][j + step]) continue;
          dp[j][j + step] = true;
          count++;
        }
      }
    }
  }

  return count;
};
