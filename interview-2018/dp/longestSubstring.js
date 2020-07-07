/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (s.length < k) return 0;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]].push(i)
    } else {
      map[s[i]] = [i];
    }
  }
  
  const dividerIndexs = [];

  for (let key in map) {
    const arr = map[key];

    if (arr.length < k) {
      dividerIndexs.push(...arr);
    }
  }

  if (dividerIndexs.length === 0) {
    return s.length;
  }
  
  // console.log(dividerIndexs)
  dividerIndexs.sort((a, b) => a - b);
  let left = 0;
  let right = -1;
  let max = 0;
  for (let i = 0; i < dividerIndexs.length; i++) {
    left = right + 1;
    right = dividerIndexs[i];
    if (right - left < k) continue;
    max = Math.max(longestSubstring(s.slice(left, right), k), max);
  }

  max = Math.max(longestSubstring(s.slice(right + 1), k), max);


  return max;
};



// s = 'aaabb', k = 3;
// s = "ababbc", k = 2
// s = "bbaaacbd"
// k = 3
// s = "aaabb"
// k = 3
// console.log(longestSubstring(s, k))