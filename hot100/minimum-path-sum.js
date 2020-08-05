/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const dp = [];

    for (let i = 0; i < grid[0].length; i++) {
        if (i === 0) {
            dp[i] = grid[0][0];
        } else {
            dp[i] = grid[0][i] + dp[i - 1];
        }
    }

    for (let i = 1; i < grid.length; i++) {
        dp[0] = dp[0] + grid[i][0];
        for (let j = 1; j < grid[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
        }
    }

    return dp[grid[0].length - 1]
};

// minPathSum([
//     [1,3,1],
//     [1,5,1],
//     [4,2,1]
//   ])