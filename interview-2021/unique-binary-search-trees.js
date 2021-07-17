/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let count = 0;

  const cached = {};

  const fn = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }

    if (cached[n]) {
      return cached[n];
    }

    let result = 0;

    for (let i = 1; i <= n; i++) {
      result += fn(i - 1) * fn(n - i);
    }

    cached[n] = result;

    return result;
  };

  return fn(n);
};
