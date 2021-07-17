/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const result = [0];

  for (let i = 1; i <= num; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }
  // console.log(result);
  return result;
};

// countBits(5);
