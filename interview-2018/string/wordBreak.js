// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// let dp = [];
// var wordBreak = function(s, wordDict) {
//   dp = [];
//   const memo = [];
//   return helper(s, wordDict, 0, memo);
// };

// function helper(s, wordDict, start, memo) {
//   // console.log(start)
//   if (start === s.length) {
//     return true;
//   }

//   if (memo[start] !== undefined)  return memo[start];

//   for (let i = start; i < s.length; i++) {
//     if (isContainer(s, wordDict, start, i) && helper(s, wordDict, i + 1, memo)) {
//       return memo[start] = true;
//     }
//   }

//   return memo[start] = false;
// }

// function isContainer(s, wordDict, start, end) {
//   const str = s.slice(start, end + 1);
//   if (dp[str] !== undefined) {
//     return dp[str];
//   }
//   const isContain = !!wordDict.find(item => item === str);
//   dp[str] = isContain;
//   return isContain;
// }

// s = "a", wordDict = ["a"]
// // s = "applepenapple", wordDict = ["apple", "pen"]
// // s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"];

// s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
// wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
// console.log(wordBreak(s, wordDict));

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = [];
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    dp[i] = false;
    for (let j = 0; j < i; j++) {
      if (dp[j] && !!wordDict.find(item => item === s.slice(j, i))) {
        dp[i] = true;
      }
    }
  }

  return dp[s.length];
};

// s = "leetcode"
// wordDict = ["leet","code"]
// s = "a", wordDict = ["a"]
// s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab"
// wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
// console.log(wordBreak(s, wordDict));