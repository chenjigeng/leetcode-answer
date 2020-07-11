/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = {};

    for (let i = 0; i < nums.length; i++) {
        result[target - nums[i]] = true;
    }

    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]])  {
            const other = target - nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === other) {
                    return [i, j]
                }
            }
        }
    }
};