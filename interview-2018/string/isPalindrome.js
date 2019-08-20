/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s) return true;
  let index = 0, endIndex = s.length - 1;
  while (index < endIndex) {
    if (!isValid(s[index])) {
      index++;
      continue;
    }

    if (!isValid(s[endIndex])) {
      endIndex--;
      continue;
    }

    if (s[index].toLowerCase() !== s[endIndex].toLowerCase()) {
      return false;
    }
    if (index + 1 === endIndex) return true;
    index++;
    endIndex--;
  }

  return index === endIndex;
};

function isValid(s) {
  return (s.toLowerCase() <= 'z' && s.toLowerCase() >= 'a') || (s >= '0' && s <= '9');
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));