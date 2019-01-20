/**
 * https://leetcode-cn.com/problems/additive-number/
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  let first = Number(num[0]), second = Number(num[1]);
  let point = 2;
  while (point < num.length) {
    const next = first + second;
    const len = String(next).length;
    const nextNum = Number(num.slice(point, point + len));
    if (nextNum !== next) return false;
    first = second;
    second = next;
    point = point + len;
  }

  return true;
};

console.log(isAdditiveNumber('199100199'));
/*
输入: "199100199"
输出: true 
解释: 累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
*/