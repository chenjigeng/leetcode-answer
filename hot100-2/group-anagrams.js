/**
 *  ["eat", "tea", "tan", "ate", "nat", "bat"]
 * [
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const sortedStrs = strs.map((str) => str.split("").sort().join(""));

    const result = [];
    const hasMark = [];

    for (let i = 0; i < strs.length; i++) {
        let r = [strs[i]];

        if (hasMark[i]) {
            continue;
        }

        hasMark[i] = true;

        for (let j = i + 1; j < strs.length; j++) {
            if (sortedStrs[j] === sortedStrs[i]) {
                hasMark[j] = true;
                r.push(strs[j]);
            }
        }

        result.push(r);
    }

    // console.log(result);
    return result;
};

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
