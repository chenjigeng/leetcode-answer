/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const dp = [];

    for (let i = 0; i < grid.length; i++) {
        dp[i] = [];

        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
            } else if (i === 0) {
                dp[i][j] = grid[i][j] + dp[i][j - 1];
            } else if (j === 0) {
                dp[i][j] = grid[i][j] + dp[i - 1][j];
            } else {
                dp[i][j] = Math.min(
                    grid[i][j] + dp[i][j - 1],
                    grid[i][j] + dp[i - 1][j]
                );
            }
        }
    }

    return dp[grid.length - 1][grid[0].length - 1];
};

// console.log(
//     minPathSum([
//         [1, 3, 1],
//         [1, 5, 1],
//         [4, 2, 1],
//     ])
// );

// console.log(
//     minPathSum([
//         [1, 2, 3],
//         [4, 5, 6],
//     ])
// );
