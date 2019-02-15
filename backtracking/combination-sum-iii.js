/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
	const res = [];
	backTracking(res, n, k, 0, 0, []);
	return res;
};

function backTracking(res, n, k, index, count, arr) {
	if (n < 0) return;
	if (n === 0 && count === k)  {
		return res.push(arr.concat());
	} else if (n === 0) return;
	else if (count === k) return;

	for (let i = index + 1; i <= 9; i++) {
		backTracking(res, n - i, k, i, count + 1, [...arr, i]);
	}
}

console.log(combinationSum3(3, 9));