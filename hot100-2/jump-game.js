/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let rightMost = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i <= rightMost) {
            rightMost = Math.max(rightMost, nums[i] + i);
        } else {
            return false;
        }
    }

    return true;
};

// console.log(canJump([2, 3, 1, 1, 4]));

// console.log(canJump([3, 2, 1, 0, 4]));
