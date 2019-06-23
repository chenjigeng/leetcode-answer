/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const results = [];
  candidates.sort((a, b) => a - b);
  backTracking(0, candidates, target, [], results);

  return results;
};

function backTracking(index, candidates, target, result, results) {
  if (target === 0) {
    results.push([...result]);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    const fir = candidates[i];
    if (target >= fir) {
      backTracking(i, candidates, target - fir, [...result, fir], results);
    } else {
      break;
    }
  }

}

// console.log(combinationSum([2,3,6,7], 7))