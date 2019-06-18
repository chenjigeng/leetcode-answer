/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const results = [0];
  for (let i = 1; i <= num; i++) {
      results[i] = results[i >> 1] + (i & 1);
  }
  return results;
};

// console.log( countBits(4));