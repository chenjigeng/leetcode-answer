/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const backTracking = (index, pIndex) => {
    if (index === s.length && pIndex === p.length) return true;

    if (index === s.length) {
      while (pIndex < p.length && p[pIndex + 1] === "*") {
        pIndex += 2;
      }

      if (pIndex >= p.length) {
        return true;
      }

      return false;
    }

    if (pIndex === p.length && index !== s.length) {
      return false;
    }

    if (s[index] === p[pIndex] || p[pIndex] === ".") {
      if (p[pIndex + 1] === "*") {
        return (
          backTracking(index + 1, pIndex) || backTracking(index, pIndex + 2)
        );
      } else {
        return backTracking(index + 1, pIndex + 1);
      }
    } else if (p[pIndex + 1] === "*") {
      return backTracking(index, pIndex + 2);
    } else {
      return false;
    }
  };

  return backTracking(0, 0);
};

// console.log(isMatch("ab", ".*"));
// console.log(isMatch("aab", "c*a*b"));

// console.log(isMatch("mississippi", "mis*is*ip*."));
