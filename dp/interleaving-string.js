// /**
//  * 回溯法
//  * @param {string} s1
//  * @param {string} s2
//  * @param {string} s3
//  * @return {boolean}
//  */
// var isInterleave = function(s1, s2, s3) {
//   if (s1.length + s2.length !== s3.length) return false;
//   const map = new Map();
//   return helpers(s1, s2, s3, map);
// };

// // s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// // console.log(isInterleave(s1, s2, s3));
// /**
//  *
//  *
//  * @param {string} s1
//  * @param {string} s2
//  * @param {string} s3
//  * @param {Map} map
//  */
// function helpers(s1, s2, s3, map) {
//   const key = s1 + '_' + s2 + '_' + s3;
//   if (map.has(key)) return map.get(key);
//   if (s3.length === 0 && s1.length === 0 && s2.length === 0) return true;
//   if (s1.length === 0) {
//     const result =  s2 === s3;
//     map.set(key, result);
//     return result;
//   } else if (s2.length === 0) {
//     const result =  s1 === s3;
//     map.set(key, result);
//     return result;
//   } else if (s3.length === 0) {
//     map.set(key, false);
//     return false;
//   }
//   if (s1[s1.length - 1] !== s3[s3.length - 1] && s2[s2.length - 1] !== s3[s3.length - 1]) {
//     map.set(key, false);
//     return false;
//   }
  
//   if (s1[s1.length - 1] === s3[s3.length - 1]) {
//     if (helpers(s1.slice(0, s1.length - 1), s2, s3.slice(0, s3.length - 1), map)) {
//       map.set(key, true);
//       return true;
//     }
//   }

//   if (s2[s2.length - 1] === s3[s3.length - 1]) {
//     if (helpers(s1, s2.slice(0, s2.length - 1), s3.slice(0, s3.length - 1), map)) {
//       map.set(key, true);
//       return true;
//     }
//   }
  
//   map.set(key, false);
//   return false;
// }

/**
 * dp[i][j] = dp[i-1][j] dp[i][j-1]
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const dp = [];
  for (let i = 0; i <= s1.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= s2.length; j++) {
      dp[i][j] = false;
    }
  }

  dp[0][0] = true;

  for (let i = 1; i <= s1.length; i++) {
    if (s1[i - 1] === s3[i - 1]) {
      dp[i][0] = dp[i - 1][0];
    }
  }

  for (let i = 1; i <= s2.length; i++) {
    if (s2[i - 1] === s3[i - 1]) {
      dp[0][i] = dp[0][i - 1];
    }
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      const k = i + j - 1;
      if (s3[k] === s1[i - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j];
      }
      if (s3[k] === s2[j - 1]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1];
      }
    }
  }

  // console.log(dp);

  return dp[s1.length][s2.length];
};

// s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"

// s1 = "aabc"
// s2 = "abad"
// s3 = "aabadabc"
// console.log(isInterleave(s1, s2, s3));