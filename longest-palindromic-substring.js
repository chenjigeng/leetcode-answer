// /**
//  * 中心扩展法
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//   let max = -1, maxStr;
//   for (let i = 0; i < s.length; i++) {
//     const l1 = getLongest(s, i, i);
//     const l2 = getLongest(s, i, i + 1);
//     const maxL = l1 > l2 ? l1 : l2;
//     if (maxL > max) {
//       if (l1 > l2) {
//         maxStr = s.slice(i - Math.floor(l1 / 2), i + Math.floor(l1 / 2) + 1);
//       } else {
//         maxStr = s.slice(i - Math.floor(l2 / 2) + 1, i + Math.floor(l2 / 2) + 1);
//       }
//     }
//     max = max > maxL ? max : maxL;
//   }

//   // console.log(maxStr)
//   return maxStr;
// };

// function getLongest(str, start, end) {
//   let L = start, R = end;
//   while (L >= 0 && R < str.length && str[L] === str[R]) {
//     L--;
//     R++;
//   }

//   return R - L - 1;
// }

// // longestPalindrome('cbbd');

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const dp = [];
  let max = -1, maxStr = '';
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    dp[i][i] = 1;
    if (i !== s.length - 1) {
      dp[i][i+1] = s[i] === s[i+1] ? 2 : 0;
      if (dp[i][i+1] > max) {
        max = dp[i][i+1];
        maxStr = s.slice(i, i+2);
      }
    }
    if (dp[i][i] > max) {
      max = dp[i][i];
      maxStr = s.slice(i, i+1);
    }
  }
  for (let i = s.length - 2; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      
      // console.log(i, j);
      // console.log(dp[i+1][j-1], j - i - 1);
      if (s[i] === s[j] && dp[i+1][j-1] === (j - i - 1)) {
        dp[i][j] = dp[i+1][j-1] + 2;
      } else {
        dp[i][j] = 0;
      }
      // console.log(dp[i][j]);
      if (dp[i][j] > max) {
        max = dp[i][j];
        maxStr = s.slice(i, j+1);
      }
    }
  }

  return maxStr;

  console.log(dp);
  console.log(maxStr);
  console.log(max);
};

// longestPalindrome('babad');
// longestPalindrome('cbbd');
// longestPalindrome('aaaaaaaaaaaaaaa');

// longestPalindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');