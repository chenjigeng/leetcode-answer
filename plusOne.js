/**
 * 加一
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/27/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits[digits.length - 1]++;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] >= 10) {
      digits[i] -= 10;
      if (i === 0) {
        digits = [1, ...digits];
      } else {
        digits[i-1]++;
      }
    }
  }
  return digits;
};