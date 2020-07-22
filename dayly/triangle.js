/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = [];

    for (let i = 0; i < triangle.length; i++)  {
        dp[i] = 0;
    }
    
    dp[0] = triangle[0][0];

    for (let i = 1; i < triangle.length; i++) {
        dp[i] = dp[i - 1] + triangle[i][i];
        for (let j = i - 1; j > 0; j--) {
            dp[j] = Math.min(dp[j], dp[j - 1]) + triangle[i][j];
        }
        dp[0] += triangle[i][0];
    }

    return Math.min(...dp);
};

// console.log(minimumTotal([
//     [2],
//    [3,4],
//   [6,5,7],
//  [4,1,8,3]
// ]))
// console.log(minimumTotal([
//     [-1],
//     [2,3],
//     [1,-1,-3]]));