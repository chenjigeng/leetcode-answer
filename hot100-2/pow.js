/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const cached = {};

  const helper = (n1) => {
    if (n1 === 0) return 1;

    if (n1 === 1) return x;

    if (cached[n1]) return cached[n1];

    if (n1 < 0) {
      cached[n1] = 1 / helper(-n1);
      return cached[n1];
    }

    if (n1 % 2 === 0) {
      cached[n1 / 2] = helper(n1 / 2);
      cached[n1] = cached[n1 / 2] * cached[n1 / 2];
    } else {
      cached[(n1 - 1) / 2] = helper((n1 - 1) / 2);
      cached[n1] = cached[(n1 - 1) / 2] * cached[(n1 - 1) / 2] * x;
    }
    return cached[n1];
  };

  return helper(n);
};

// console.log(myPow(2, 10));
// myPow(0.00001, 2147483647);
