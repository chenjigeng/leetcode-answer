/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	const next = getNext(needle);
	let j = 0;
	let i = 0;
	while (j < needle.length && i < haystack.length) {
		if (haystack[i] === needle[j]) {
			i++;
			j++;
		} else {
			j = next[j];
			if (j === -1) {
				j = 0;
				i++;
			}
		}
	}

	if (j === needle.length) {
		return i - j;
	}

	return -1;
};

/**
 *
 *
 * @param {string} str
 */
function getNext(str) {
	let next = [-1];
	let j = 0, k = -1;

	while (j < str.length - 1) {
		if (k === -1 || str[j] === str[k]) {
			k++;
			j++;

			if (str[j] === str[k]) {
				next[j] = next[k];
			} else {
				next[j] = k;
			}
		} else {
			k = next[k];
		}
	}

	return next;
}

// console.log(strStr('hello', 'll'));
// console.log(strStr('aaaaa', 'bba'));