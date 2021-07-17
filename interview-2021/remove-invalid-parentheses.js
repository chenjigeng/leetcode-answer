/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  let result = [];
  let currentMaxStr = 0;

  const backTracking = (cur, index, leftCount, rightCount) => {
    if (index === s.length) {
      if (leftCount === rightCount) {
        if (cur.length === currentMaxStr) {
          if (!result.includes(cur)) {
            result.push(cur);
          }
        } else if (cur.length > currentMaxStr) {
          result = [cur];
        }
        currentMaxStr = Math.max(currentMaxStr, cur.length);
      }
      return;
    }

    if (leftCount < rightCount) {
      return;
    }

    if (s[index] === "(") {
      backTracking(cur + s[index], index + 1, leftCount + 1, rightCount);
      backTracking(cur, index + 1, leftCount, rightCount);
    } else if (s[index] === ")") {
      backTracking(cur + s[index], index + 1, leftCount, rightCount + 1);
      backTracking(cur, index + 1, leftCount, rightCount);
    } else {
      backTracking(cur + s[index], index + 1, leftCount, rightCount);
    }
  };

  backTracking("", 0, 0, 0);

  return result;
};
