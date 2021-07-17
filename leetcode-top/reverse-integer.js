/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = x > 0 ? true : false;

  x = Math.abs(x);

  let result = 0;

  while (x) {
    const rightNumber = x % 10;
    x = Math.floor(x / 10);
    result = result * 10 + rightNumber;
  }

  if (!sign) {
    result *= -1;
  }

  // let result = +((sign ? "" : "-") + ("" + x).split("").reverse().join(""));

  if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
    return 0;
  }

  return result;
};

// reverse(123);
