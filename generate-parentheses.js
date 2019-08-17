/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];
  backTracking(result, '', 0, )
};

function backTracking(result, str, index, n, left, right) {
  if (index === 2 * n) {
    result.push(str);
    return;
  }

  if (left > n || right > n || left > right) return;
  
  backTracking(result, str + '(', index + 1, n, left + 1, right);

  backTracking(result, str + ')', index + 1, n, left, right + 1);
}

