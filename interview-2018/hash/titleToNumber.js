/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let number = 0;

  for (let i = 0; i < s.length; i++) {
    number *= 26;
    number += s[i].charCodeAt() - 64;
  }

  return number;
};