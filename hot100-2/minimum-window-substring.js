/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const map = {};

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      map[t[i]] = 0;
    }

    map[t[i]]++;
  }

  const currentMap = {};

  let currentStr = '';
  let minStr = '';

  for (let i = 0; i < s.length; i++) {
    if (!currentMap[s[i]]) {
      currentMap[s[i]] = 0;
    }
    currentMap[s[i]]++;
    currentStr += s[i];

    while (isEqual(currentMap, map)) {
      if (!minStr || currentStr.length < minStr.length) {
        minStr = currentStr;
      }

      const left = currentStr[0];
      currentStr = currentStr.slice(1);
      currentMap[left]--;
    }
  }

  return minStr;
};

function isEqual(a, b) {
  for (let key in b) {
    if (!a[key] || a[key] < b[key]) {
      return false;
    }
  }

  return true;
}

// (s = "ADOBECODEBANC"), (t = "ABC");
// console.log(minWindow(s, t));
