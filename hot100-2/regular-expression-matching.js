/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const map = {};

  /**
   *
   * @param {string} s
   * @param {string} p
   */
  function backTracking(s, p) {
    let key = s + "$" + p;
    if (map[key] !== undefined) {
      return map[key];
    }
    if (p.length === 0 && s.length > 0) {
      map[key] = false;
      return false;
    }
    if (s.length === 0) {
      if (p.length === 0) {
        map[key] = true;

        return true;
      }

      if (p.length % 2 === 0) {
        for (let j = 1; j < p.length; j += 2) {
          if (p[j] !== "*") {
            map[key] = false;

            return false;
          }
        }
        map[key] = true;

        return true;
      } else {
        map[key] = false;

        return false;
      }
    }
    if (s[0] === p[0] || p[0] === ".") {
      if (p[1] === "*") {
        map[key] =
          backTracking(s.slice(1), p.slice(2)) ||
          backTracking(s.slice(1), p) ||
          backTracking(s, p.slice(2));

        return map[key];
      }

      map[key] = backTracking(s.slice(1), p.slice(1));
      return map[key];
    }

    if (p[1] === "*") {
      map[key] = backTracking(s, p.slice(2));
      return map[key];
    }

    map[key] = false;

    return false;
  }

  return backTracking(s, p);
};

// console.log(isMatch("aa", "a"));
// console.log(isMatch("aa", "a*"));
// console.log(isMatch("aa", ".*"));
// console.log(isMatch("aab", "c*a*b"));
// console.log(isMatch("mississippi", "mis*is*p*."));

// console.log(isMatch("bbbba", ".*a*a"));
