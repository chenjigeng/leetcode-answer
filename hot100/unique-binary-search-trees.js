/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = [1];

    for (let i = 1; i <= n; i++) {
        dp[i] = 0;
        for (let j = 1; j <= i; j++) {
            const leftCount = j - 1, rightCount = i - j;
            dp[i] += dp[leftCount] * dp[rightCount];
        }
    }

    return dp[n];
};


// console.log(numTrees(3));