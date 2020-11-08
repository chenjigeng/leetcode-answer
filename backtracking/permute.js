// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    backTracking(nums, 0, result);

    return result;
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} index 
 * @param {number[][]} result 
 */
function backTracking(nums, index, result) {
    // console.log(nums, index);
    if (index === nums.length - 1) {
        result.push([...nums]);
        return;
    }

    for (let i = index; i < nums.length; i++) {
        swap(nums, index, i);
        backTracking(nums, index + 1, result);
        swap(nums, index, i);
    }
}
/**
 * 
 * @param {number[]} nums 
 * @param {number} i 
 * @param {number} j 
 */
function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}

// permute([1, 2, 3])