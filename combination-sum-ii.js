/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	const results = [];
	candidates.sort((a, b) => a - b);
	backTracking(candidates, target, [], results);
	return results;
};

function backTracking(candidates, target, result, results) {
	if (target === 0) {
		results.push([...result]);
		return;
	}
	for(let i = 0; i < candidates.length; i++) {
		if (target < candidates[i]) {
			break;
		}
		// console.log(candidates);
		console.log([...candidates].slice(i + 1));
		backTracking([...candidates].slice(i + 1), target - candidates[i], [...result, candidates[i]], results);
		backTracking([...candidates].slice(i + 1), target, [...result], results);
	}
}

console.log(combinationSum2([10,1,2,7,6,5], 8));