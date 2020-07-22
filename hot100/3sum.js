// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// [-4, -1, -1, 0, 1, 2]
// [-4, -1]
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(((a, b) => a - b));

    const map = {};
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        map[-nums[i]] = true;
    }

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[right] + nums[i] < 0) {
                left++;
            } else if (nums[left] + nums[right] + nums[i] > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) {
                    left++;
                }

                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            }
        }
        while (nums[i] === nums[i + 1]) {
            i++;
        }
    }

    // console.log(result);
    return result;
};
// nums = [-1, 0, 1, 2, -1, -4];
// nums = [0, 0, 0, 0];
// console.log(threeSum(nums));