/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let gray = [0];

  for (let i = 0; i < n; i++) {
    const newFirstGray = gray.map((item) => item);
    const newSecondGray = gray.reverse().map((item) => item + Math.pow(2, i));
    gray = [...newFirstGray, ...newSecondGray];
  }

  return gray;
};

// 001;
// 000;
// 010;
// 011;

// 111;
// 110;
// 100;
// 101;
