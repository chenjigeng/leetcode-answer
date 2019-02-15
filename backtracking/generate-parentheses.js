/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	const res = [];
	generate(res, '', 0, 0, n);
	return res;
};

function generate(res, str, leftCount, rightCount, n) {
	if (leftCount > n || rightCount > n || rightCount > leftCount) return;

	if (leftCount === n && rightCount === n) res.push(str);

	generate(res, str + '(', leftCount + 1, rightCount, n);
	generate(res, str + ')',  leftCount, rightCount + 1, n);
}


console.log(generateParenthesis(3));
