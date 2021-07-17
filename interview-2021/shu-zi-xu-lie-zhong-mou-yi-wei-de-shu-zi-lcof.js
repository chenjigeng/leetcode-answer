/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n === 0) return 0;
  let current = 0,
    index = 0;

  while (true) {
    current = Math.pow(10, index) * 9 * (index + 1);
    if (n > current) {
      n -= current;
      index++;
    } else {
      break;
    }
  }

  let num = Math.ceil(n / (index + 1));
  let re = n % (index + 1);

  let target = Math.pow(10, index) + num - 1;

  if (re === 0) {
    console.log(target.toString().slice(target.toString().length - 1));

    return target.toString().slice(target.toString().length - 1);
  }
  console.log(target.toString().slice(re - 1, re));
  return target.toString().slice(re - 1, re);
};

// findNthDigit(3);
// findNthDigit(11);

// findNthDigit(10);
// findNthDigit(1000);
