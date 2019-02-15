/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
	const res = [];

	combination(res, n, k, 0, []);

	return res;
};

function combination(res, n, k, index, r) {
	if (index === k) {
		res.push(r.concat());
		return;
	}

	for (let i = r[index - 1] || index; i < n; i++) {
		r.push(i + 1);
		combination(res, n, k, index + 1, r);
		r.pop();	
	}
}

// console.log(combine(4, 2));