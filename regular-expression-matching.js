/**
 * @param {string} s
 * @param {string} p . *
 * @return {boolean}
 */
var isMatch = function(s, p) {
	if (s.length === 0 && p.length === 0) return true;

	const firstMatch = s[0] === p[0] || p[0] === '.';
	
	if (p.length > 1 && p[1] === '*') {
		return isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p));
	} else {
		return firstMatch && isMatch(s.slice(1), p.slice(1));
	}
};

function isOk(s, p) {
	
}

// console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'a*'));
// console.log(isMatch('ab', '.*'));
// console.log(isMatch('aab', 'c*a*b'));
console.log(isMatch('mississippi', 'mis*is*p*.'));
// console.log(isMatch('ab', '.*c'));
// console.log(isMatch('aa', 'a*'));

// "mississippi"
// "mis*is*p*."
