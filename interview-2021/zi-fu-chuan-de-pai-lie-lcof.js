/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const map = {},
    result = [];
  s = s.split("");

  const backTracking = (index) => {
    if (index === s.length) {
      if (!map[s]) {
        result.push(s.join(""));
        map[s] = true;
      }
      return;
    }

    for (let i = index; i < s.length; i++) {
      [s[index], s[i]] = [s[i], s[index]];
      backTracking(index + 1);
      [s[index], s[i]] = [s[i], s[index]];
    }
  };

  backTracking(0);
  console.log(result);

  return result;
};

// s = "abc";

// permutation(s);
