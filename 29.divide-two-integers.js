/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (17.23%)
 * Total Accepted:    7.8K
 * Total Submissions: 45.4K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * 
 * 示例 1:
 * 
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 
 * 说明:
 * 
 * 
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。
 * 
 * 
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === 0) return 0;
  let finalSign = false;

  if (dividend < 0) {
    finalSign = !finalSign;
    dividend = -dividend;
  }

  if (divisor < 0) {
    finalSign = !finalSign;
    divisor = -divisor;
  }

  let start = 0, end = dividend;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (mid * divisor <= dividend && (mid + 1) * divisor > dividend) {
      if (finalSign) {
        return -mid;
      }
      if (mid > 2147483647) {
        return 2147483647;
      }
      return mid;
    }

    if (mid * divisor > dividend) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
};

// console.log(divide(1, 1));
