/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const map = {};
    const helper = (str) => {
        if (map[str] !== undefined) return map[str];
        if (str.length === 0) return true;
        const possibleOptions = wordDict.filter(
            (word) => str.indexOf(word) === 0
        );

        map[str] = possibleOptions.some((option) => {
            return helper(str.slice(option.length));
        });

        return map[str];
    };

    return helper(s, wordDict);
};
