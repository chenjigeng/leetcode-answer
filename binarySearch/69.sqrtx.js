/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (34.15%)
 * Total Accepted:    21.7K
 * Total Submissions: 63.6K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let start = 0, end = x;
  while (true) {
    let mid = Math.floor((start + end ) / 2);
    let mid2 = mid * mid;
    if (mid2 <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    }

    if (mid2 > x) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
};

// console.log(mySqrt(1));
