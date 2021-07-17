/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // if (s.length === 1) return 1;
  const dp = [];

  for (let i = 0; i < s.length; i++) {
    dp[i] = [];

    for (let j = 0; j < s.length; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  for (let step = 1; step < s.length; step++) {
    for (let i = 0; i + step < s.length; i++) {
      if (s[i] === s[i + step]) {
        if (step === 1) {
          dp[i][i + step] = 2;
        } else {
          dp[i][i + step] = dp[i + 1][i + step - 1] + 2;
        }
      } else {
        dp[i][i + step] = Math.max(dp[i][i + step - 1], dp[i + 1][i + step]);
      }
    }
  }

  return dp[0][s.length - 1];
};

// console.log(longestPalindromeSubseq("bbbab"));
// console.log(longestPalindromeSubseq("aaa"));
