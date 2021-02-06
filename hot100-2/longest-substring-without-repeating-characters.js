/**
 * 输入: s = "abcabcbb"
 * 输出: 3
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (str.indexOf(s[i]) === -1) {
      str += s[i];
    } else {
      count = Math.max(count, str.length);
      str = str.slice(str.indexOf(s[i]) + 1) + s[i];
    }
  }

  return Math.max(str.length, count);
};

// console.log(lengthOfLongestSubstring("aabaab!bb"));
