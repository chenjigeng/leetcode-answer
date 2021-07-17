/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1,
    right = x;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    }

    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return left;
};

console.log(mySqrt(8));
