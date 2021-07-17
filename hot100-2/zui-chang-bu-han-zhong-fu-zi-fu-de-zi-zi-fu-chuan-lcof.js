/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = {};

  let count = 0,
    max = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      for (let j = i - count; j < i; j++) {
        if (s[j] === s[i]) {
          break;
        } else {
          count--;
          map[s[j]] = false;
        }
      }
    } else {
      count++;
      map[s[i]] = true;
      max = Math.max(count, max);
    }
  }

  return max;
};

// lengthOfLongestSubstring("pwwkew");
