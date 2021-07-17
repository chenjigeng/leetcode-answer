let maxLength;

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const result = [];
  maxLength = 0;
  backTracking(s, result, "", 0, 0);

  return result;
};

/**
 *
 * @param {string} s
 * @param {string} cur
 * @param {string[]} result
 */
function backTracking(s, result, cur, leftCount, rightCount) {
  if (leftCount < rightCount) {
    return;
  }

  if (s.length === 0) {
    if (leftCount === rightCount && !result.includes(cur)) {
      if (cur.length > maxLength) {
        result.splice(0, result.length);
        maxLength = cur.length;
      }

      if (cur.length === maxLength) {
        result.push(cur);
      }
    }

    return;
  }

  const first = s[0];

  if (first !== ")" && first !== "(") {
    return backTracking(s.slice(1), result, cur + first, leftCount, rightCount);
  }
  // 丢弃
  backTracking(s.slice(1), result, cur, leftCount, rightCount);

  if (first === "(") {
    leftCount++;
  } else {
    rightCount++;
  }

  backTracking(s.slice(1), result, cur + first, leftCount, rightCount);
}

// console.log(removeInvalidParentheses("()())()"));
