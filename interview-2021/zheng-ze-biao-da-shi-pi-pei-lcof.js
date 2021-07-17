/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const dp = [];

  for (let i = 0; i <= s.length; i++) {
    dp[i] = [];

    for (let j = 0; j <= p.length; j++) {
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;

  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        if (i === 0) {
          dp[i][j] = false;
          continue;
        }
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        if (i === 0) {
          dp[i][j] = dp[i][j - 2];
          continue;
        }
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] === s[i - 1] || p[j - 2] === ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
        }
      }
    }
  }

  // console.log(dp[s.length][p.length]);

  return dp[s.length][p.length];
};

// s = "mississippi";
// p = "mis*is*p*.";
// s = "aab";
// p = "c*a*b";

// s = "ab";
// p = ".*";
// s = "aaa";
// p = "aaaa";
// console.log(isMatch(s, p));
