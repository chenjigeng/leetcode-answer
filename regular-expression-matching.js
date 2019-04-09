/**
 * @param {string} s
 * @param {string} p . *
 * @return {boolean}
 */
var isMatch = function(s, p) {
	return isOk(s, p);
};

function isOk(s, p) {
	let pIndex = 0;
	for (let i = 0; i < s.length;) {
		const currentP = p[pIndex], nextP = p[pIndex + 1];
		if (nextP === '*') {
			if (s[i] === currentP || currentP === '.') {
				i++;
				continue;
			} else {
				pIndex += 2;
			}
		} else {
			if (s[i] === currentP || currentP === '.') {
				i++;
				pIndex++;
				continue;
			} else {
				return false;
			}
		}
	}

	return true;
}

// console.log(isMatch('aa', 'a'));
// console.log(isMatch('aa', 'a*'));
// console.log(isMatch('ab', '.*'));
// console.log(isMatch('aab', 'c*a*b'));
// console.log(isMatch('mississippi', 'mis*is*ip*.'));
// console.log(isMatch('ab', '.*c'));
console.log(isMatch('aa', 'a*'));

