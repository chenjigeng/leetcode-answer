/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = [1];

    for (let i = 1; i < n; i++) {
        dp[i] = i;
    }
    dp[n] = 1

    for (let i = 2; i <= n; i++) {
        for (let j = i - 1; j >= 1; j--) {
            dp[i] = Math.max(dp[i], dp[i - j] * j);
        }
    }

    // console.log(dp);

    return dp[n]
};

// integerBreak(2);
// integerBreak(10);