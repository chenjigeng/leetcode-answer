/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    let repeatStr = s.slice(0, i + 1);

    if (s.length % (i + 1) !== 0) continue;

    let find = true;

    for (let j = 0; j < s.length; j += i + 1) {
      if (s.slice(j, j + i + 1) !== repeatStr) {
        find = false;
        break;
      }
    }

    if (find) return true;
  }

  return false;
};

// repeatedSubstringPattern("aba");
