/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const dp = [];

  for (let i = 0; i < s.length; i++) {
    dp[i] = [];

    for (let j = 0; j < s.length; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      if (s[j] === s[j + i - 1] && (i < 2 || dp[j + 1][j + i - 2])) {
        dp[j][j + i - 1] = 1;
      }
    }
  }

  console.log(dp);
};

longestPalindrome("babad");
