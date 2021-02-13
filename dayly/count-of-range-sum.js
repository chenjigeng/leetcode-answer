/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (cur >= lower && cur <= upper) {
            count++;
        }
        for (let right = i + 1; right < nums.length; right++) {
            cur += nums[right];
            if (cur >= lower && cur <= upper) {
            count++;
            }
        }
    }

    return result.length;
};