/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
	const arr = [];
	for (let i = 0; i < strs.length; i++) {
		let zeroCount = 0, oneCount = 0;
		for (let j = 0; j < strs[i].length; j++) {
			if (strs[i][j] === '0') zeroCount++;
			else oneCount++;
		}

		arr.push([zeroCount, oneCount]);
	}
	const dp = [[]];
	for (let i = 0; i < arr.length; i++) {
		const [zeroCount, oneCount] = arr[i];

		for (let j = m; j >= zeroCount; j--) {
			dp[j] = dp[j] || [];
			for (let k = n; k >= oneCount; k--) {
				if (zeroCount <= j && oneCount <= k) {
					dp[j][k] = Math.max(dp[j][k] || 0, ((dp[j - zeroCount] || [])[k - oneCount] || 0) + 1);
				}
			}
		}
	}
	
	// console.log(map);
	// console.log(dp);
	return (dp[m] || [])[n] || 0;
};

// arr = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
// arr = ["10", "0", "1"], m = 1, n = 1
// findMaxForm(arr, m, n);
// findMaxForm(["00","000"], 1, 10);