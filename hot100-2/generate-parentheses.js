/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function backTracking(current, leftCount, rightCount) {
    if (leftCount < rightCount || leftCount > n || rightCount > n) {
      return;
    }

    if (leftCount === rightCount && leftCount === n) {
      result.push(current);
      return;
    }

    if (leftCount > rightCount) {
      backTracking(current + ")", leftCount, rightCount + 1);
    }

    if (leftCount < n) {
      backTracking(current + "(", leftCount + 1, rightCount);
    }
  }

  backTracking("", 0, 0);

  // console.log(result);
  return result;
};

// generateParenthesis(8);
// generateParenthesis(1);
