/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let str = n.toString();
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    let high = +str.slice(0, i);
    let lower = +str.slice(i + 1);

    if (i === str.length - 1) {
      lower = 0;
    }

    if (i === 0) {
      high = 0;
    }

    if (str[i] === "0") {
      count += high * Math.pow(10, str.length - i - 1);
    } else if (str[i] === "1") {
      count += high * Math.pow(10, str.length - i - 1) + lower + 1;
    } else {
      count += (high + 1) * Math.pow(10, str.length - i - 1);
    }
  }

  return count;
};

// console.log(countDigitOne(2222));
// console.log(countDigitOne(12));
// console.log(countDigitOne(100));
