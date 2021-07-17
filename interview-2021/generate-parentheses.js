/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const backTracking = (current, leftCount, rightCount) => {
    if (leftCount > n || rightCount > n) return;
    if (leftCount === n && rightCount === n) {
      result.push(current);
      return;
    }

    backTracking(current + "(", leftCount + 1, rightCount);
    if (leftCount > rightCount) {
      backTracking(current + ")", leftCount, rightCount + 1);
    }
  };

  backTracking("", 0, 0);
  return result;
};
