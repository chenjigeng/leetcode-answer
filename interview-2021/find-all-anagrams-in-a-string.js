/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let map = {};
  const result = [];

  for (let i = 0; i < p.length; i++) {
    if (!map[p[i]]) {
      map[p[i]] = 0;
    }

    map[p[i]]++;
  }

  for (let start = 0; start <= s.length - p.length; start++) {
    const newMap = { ...map };

    for (let j = 0; j < p.length; j++) {
      if (newMap[s[j + start]]) {
        newMap[s[j + start]]--;
      } else {
        break;
      }

      if (j === p.length - 1) {
        result.push(start);
      }
    }
  }

  return result;
};
