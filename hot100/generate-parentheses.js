/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    helper('', n, result, 0);

    // console.log(result);
    return result;
};

/**
 * 
 * @param {string} s 
 * @param {number} n 
 * @param {string[]} result 
 * @param {number} canRightNumber
 */
function helper(s, n, result, canRightNumber) {
    if (2 * n - s.length < canRightNumber) return;
    if (s.length === 2 * n) {
        result.push(s);
        return;
    }

    if (canRightNumber > 0) {
        helper(s + ')', n, result, canRightNumber - 1);
    }

    helper(s + '(', n, result, canRightNumber + 1);
}

// console.log(generateParenthesis(3));