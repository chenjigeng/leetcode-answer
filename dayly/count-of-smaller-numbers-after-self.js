/**
 * https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/
 * 输入: [5,2,6,1]
 * 输出: [2,1,1,0] 
 *  解释:
 * 5 的右侧有 2 个更小的元素 (2 和 1).
 * 2 的右侧仅有 1 个更小的元素 (1).
 * 6 的右侧有 1 个更小的元素 (1).
 * 1 的右侧有 0 个更小的元素.
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    const smaller = [];

    for (let i = 0; i < nums.length; i++) {
        smaller[i] = 0;
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        const target = nums[i];
        const index = binarySort(nums, i + 1, nums.length - 1, target);
        smaller[i]  = index - i;
        for (let j = i; j < index; j++) {
            nums[j] = nums[j + 1];
        }

        nums[index] = target;
    }


    return smaller;
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} start 
 * @param {number} end 
 * @param {number} insert 
 */
function binarySort(nums, start, end, insert) {
    let left = start, right = end;

    while (left <= right) {
        const mid  = Math.floor((left + right) / 2);
        if (nums[mid] < insert) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left - 1;
}

// console.log(countSmaller([5,2,6,1]));