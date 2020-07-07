/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  return backTracking(s, wordDict, {});
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function backTracking(s, wordDict, map) {
  if (map[s] !== undefined) return map[s];
  if (s.length === 0) {
    return true;
  }

  const filterDict = wordDict.filter(word => s.indexOf(word) === 0);

  for (let i = 0; i < filterDict.length; i++) {
    if (backTracking(s.slice(filterDict[i].length), wordDict, map)) {
      map[s] = true;
      return true;
    }
  }

  map[s] = false;

  return false;
}

// console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
// ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))