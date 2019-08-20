/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

var wordBreak = function(s, wordDict) {
  const dp = [];
  const map = [[]];
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    map[i] = [];
    for (let j = 0; j < i; j++) {
      if (dp[j] && contain(s.slice(j, i), wordDict)) {
        map[i].push(j);
        // if (j !== 0) {
        //   map[i] = [...map[i], ...map[j].map(item => `${item} ${s.slice(j, i)}`)];
        // } else {
        //   map[i] = [...map[i], s.slice(j, i)];
        // }
        dp[i] = true;
      }
    }
  }

  const result = [];
  const sum = [];
  if (!dp[s.length]) return [];
  // console.log(map);

  for (let i = 0; i <= s.length; i++) {
    sum[i] = [];
    if (map[i].length > 0) {
      map[i].map(j => {
        if (j !== 0) {
          sum[i] = [...sum[i], ...sum[j].map(item => `${item} ${s.slice(j, i)}`)]
        } else {
          sum[i] = [...sum[i], s.slice(j, i)];
        }
      })
    }
  }
  
  return sum[s.length];
};
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]

// // wordBreak(s, wordDict)
// s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
console.log(wordBreak(s, wordDict))

function contain(s, wordDict) {
  return !!wordDict.find(item => item === s);
}