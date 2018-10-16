/**
 * @param {string} s
 * @return {number}
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 * 无重复字符的最长子串
 */
var lengthOfLongestSubstring = function(s) {
	if (!s) return 0;
	let max = 1, startIndex = 0, currentLength = 1;
	for (let i = 1; i < s.length; i++) {
		for (let j = startIndex; j < i; j++) {
			if (s[i] === s[j]) {
				max = max > currentLength ? max : currentLength;
				startIndex = j + 1;
				currentLength = i - startIndex + 1;
				break;
			} else if (j === i - 1) {
				currentLength++;
			}
    }
    max = max > currentLength ? max : currentLength;
	}
	return max;
};

// test
console.log(lengthOfLongestSubstring('ua'));
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'));