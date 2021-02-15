/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== 0) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    break;
                }

                if (j === nums.length - 1) {
                    return;
                }
            }
        }
    }
};

// moveZeroes([0, 1, 0, 3, 12]);
