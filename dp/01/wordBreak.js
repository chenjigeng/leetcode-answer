/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
	const map = new Map();
	return helper(s, wordDict, map);
};

/**
 *
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @param {Map} map
 */
function helper(s, wordDict, map) {
	if (map.has(s)) return map.get(s);

	const mapWords = wordDict.filter(item => s.indexOf(item) === 0);

	for (let i = 0; i < mapWords.length; i++) {
		const word = mapWords[i];
		const nextStr = s.slice(word.length);
		if (!nextStr) {
			map.set(s, true);
			return true;
		}

		if (helper(nextStr, wordDict, map)) {
			map.set(s, true);
			return true;
		}
	}

	map.set(s, false);
	return false;
}