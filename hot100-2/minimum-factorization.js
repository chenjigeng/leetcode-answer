/**
 * @param {number} num
 * @return {number}
 */
 var smallestFactorization = function(num) {
  if (num === 1) return 1;
  let cur = 0;
  let count = 0;

  for (let i = 9; i > 1; i--) {
      while (num % i === 0) {
        console.log(num, num / i, i);
          cur = cur + (i * Math.pow(10, count));
          num = num / i;
          count++;
      }
  }
  

  if (num > 1 || cur > (1 << 32)) return 0;

  return cur;
};



// console.log(smallestFactorization(18000000))