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

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "*") {
      dp[0][i + 1] = dp[0][i - 1];
    }
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (s[i] === p[j] || p[j] === ".") {
        dp[i + 1][j + 1] = dp[i][j];
      } else if (p[j] === "*") {
        dp[i + 1][j + 1] = dp[i + 1][j - 1];
        if (s[i] === p[j - 1] || p[j - 1] === ".") {
          dp[i + 1][j + 1] = dp[i + 1][j + 1] || dp[i][j + 1];
        }
      }
    }
  }

  // console.log(dp);

  return dp[s.length][p.length];
};

// console.log(isMatch("aa", "a"));
// console.log(isMatch("aa", "a*"));
// console.log(isMatch("aa", ".*"));
// console.log(isMatch("aab", "c*a*b"));
// console.log(isMatch("mississippi", "mis*is*p*."));

// console.log(isMatch("bbbba", ".*a*a"));
