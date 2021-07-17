/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
  const dp = [1]

  for (let i = 0; i < s.length; i++) {
    dp[i + 1] = 0;
    if (i === 0) {
      if (s[i] !== '0') {
        dp[i + 1] = 1
      }
    } else {
      if (s[i] !== '0') {
        dp[i + 1] += dp[i];
      }

      if (s[i - 1] !== '0' && +s.slice(i - 1, i + 1) >= 0 && +s.slice(i - 1, i + 1) <= 26) {
        dp[i + 1] += dp[i - 1]
      }
    }
  }

  return dp[s.length]
};

// numDecodings("111111111111111111111111111111111111111111111")