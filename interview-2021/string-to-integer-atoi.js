/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let startCount = false,
    sign = "+",
    str = "";

  s = s.trim();

  if (s[0] === "+" || s[0] === "-") {
    sign = s[0];
    s = s.slice(1);
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      str += s[i];
    } else {
      break;
    }
  }

  let result = 0;

  if (s.length > 0) {
    if (sign === "+") {
      result = +str;

      if (result > Math.pow(2, 31) - 1) {
        result = Math.pow(2, 31) - 1;
      }
    } else {
      result = -str;

      if (result < -Math.pow(2, 31)) {
        result = -Math.pow(2, 31);
      }
    }
  }

  return result;
};
