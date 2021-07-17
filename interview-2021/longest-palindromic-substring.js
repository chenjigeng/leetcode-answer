/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const dp = [];

  let target = "";

  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    for (let j = 0; j < s.length; j++) {
      dp[i][j] = false;
    }

    dp[i][i] = true;
    target = s[i];
  }

  for (let step = 1; step < s.length; step++) {
    for (let j = 0; j < s.length - step; j++) {
      if (
        s[j] === s[j + step] &&
        (j + 1 === j + step || dp[j + 1][j + step - 1])
      ) {
        dp[j][j + step] = true;
        target = s.slice(j, j + step + 1);
      }
    }
  }
  // console.log(target);

  return target;
};

// longestPalindrome("babad");
// longestPalindrome("cbbd");

// longestPalindrome("aacabdkacaa");
