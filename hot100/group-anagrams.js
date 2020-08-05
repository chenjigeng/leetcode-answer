/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (let i = 0; i < strs.length; i++) {
        const mapStr = strs[i].split('').sort().join('');
        if (!map[mapStr]) {
            map[mapStr] = [strs[i]];
        } else {
            map[mapStr].push(strs[i]);
        }
    }

    const result = [];

    for (let key in map) {
        result.push(map[key]);
    }

    return result;
};