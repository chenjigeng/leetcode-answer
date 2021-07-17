/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const backTracking = (current, cached, index) => {
    if (current < 0 || index > candidates.length) {
      return;
    }

    if (current === 0) {
      result.push([...cached]);
      return;
    }

    if (current - candidates[index] >= 0) {
      backTracking(
        current - candidates[index],
        [...cached, candidates[index]],
        index
      );
    }
    backTracking(current, [...cached], index + 1);
  };

  backTracking(target, [], 0);

  return result;
};

// console.log(combinationSum([2, 3, 6, 7], 7));
