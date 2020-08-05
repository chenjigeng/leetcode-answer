// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums) {
//     const dp = [];
//     for (let i = 0; i < nums.length; i++) {
//         dp[i] = false;
//     }
//     dp[nums.length - 1] = true;

//     for (let i = nums.length - 2; i >= 0; i--) {
//         for (let j = nums[i]; j > 0; j--) {
//             if (!dp[i]) {
//                 if (i + j >= nums.length - 1) {
//                     dp[i] = true;
//                 }  else {
//                     dp[i] = dp[i + j];
//                 }
//             } else {
//                 break;
//             }
//         }
//     }

//     // console.log(dp);

//     return dp[0];
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let rightMost = 0;

    for (let i = 0; i < nums.length; i++) {
        if (rightMost >= i) {
            rightMost = Math.max(nums[i] + i, rightMost);
        }  else {
            return false;
        }
    }

    return true;
};

// console.log(canJump([2,3,1,1,4]))
// console.log(canJump([3,2,1,0,4]))