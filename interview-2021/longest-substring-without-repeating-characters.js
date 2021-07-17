/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let currentMap = {};
  let count = 0,
    max = 0;

  for (let i = 0; i < s.length; i++) {
    if (!currentMap[s[i]]) {
      currentMap[s[i]] = true;
      count++;

      max = Math.max(count, max);
    } else {
      for (let j = i - count; j < i; j++) {
        if (s[j] !== s[i]) {
          count--;
          currentMap[s[j]] = false;
        } else {
          break;
        }
      }
    }
  }

  return max;
};
