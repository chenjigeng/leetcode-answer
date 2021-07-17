/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortStrs = strs.map((item) => item.split("").sort().join(""));

  const map = {};

  const result = [];

  for (let i = 0; i < strs.length; i++) {
    if (map[i]) continue;
    map[i] = true;

    const item = [strs[i]];

    for (let j = i + 1; j < strs.length; j++) {
      if (map[j]) continue;

      if (sortStrs[i] === sortStrs[j]) {
        item.push(strs[j]);
        map[j] = true;
      }
    }

    result.push(item);
  }

  return result;
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
