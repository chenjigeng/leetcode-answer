/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const dp = [];
    for (let i = 0; i < s.length; i++) {
        dp[i] = 0;
    }
    let max = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')' && s[i - 1] === ')') {
            if (s[i - 1 - dp[i - 1]] === '(') {
                if (i - dp[i - 1] - 2 >= 0) {
                    dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2;
                } else {
                    dp[i] = dp[i - 1] + 2;
                }
            }
        }
        if (s[i] === ')' && s[i - 1] === '(') {
            if (i - 2 < 0) {
                dp[i] = 2;
            } else {
                dp[i] = dp[i - 2] + 2;
            }
        }

        max = Math.max(max, dp[i])
    }

    // console.log(max);
    return max;
};

// longestValidParentheses(')()())')
// longestValidParentheses('(()')
// longestValidParentheses('()')

// longestValidParentheses("()(())");