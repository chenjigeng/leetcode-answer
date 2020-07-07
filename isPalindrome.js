/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.toUpperCase().replace(/[^\d\w]/gi, '');
  const reverseStr = str.split('').reverse().join('');
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== reverseStr[i]) {
      return false;
    }
  }

  return true;
};


// console.log(isPalindrome('race a car'))