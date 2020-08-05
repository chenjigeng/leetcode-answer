/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0, right =  nums.length - 1, current = 0;

    while (current <= right) {
        if (nums[current] === 0) {
            const item = nums[left];
            nums[left] = 0;
            nums[current++] = item;
            left++;
        } else if (nums[current] === 2) {
            const item = nums[right];
            nums[right] = 2;
            nums[current] = item;
            right--;   
        } else {
            current++;
        }
    }

    return nums;
};

// let nums = [2,0,1];

// console.log(sortColors(nums));