/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const dp = [0, 1];

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            if (dp[i] === undefined) {
                dp[i] = dp[i - j * j] + 1;
            } else {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }
    }

    // console.log(dp);

    return dp[n];
};

// numSquares(12);
