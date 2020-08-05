/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return helper(nums, 0, []);
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} index 
 * @param {number[][]} result 
 */
function helper(nums, index, result) {
    if (index === nums.length) {
        result.push([...nums]);
        return;
    }

    for (let i = index; i < nums.length; i++) {
        swap(nums, index, i);
        helper(nums, index + 1, result);
        swap(nums, index, i);
    }

    return result;
}

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

// console.log(permute([1,2,3]));