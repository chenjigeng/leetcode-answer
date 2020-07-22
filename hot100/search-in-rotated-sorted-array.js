/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binary(nums, target, 0, nums.length - 1);
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @param {number} left
 * @param {number} right
 */
function binary(nums, target, left, right) {
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) {
            if (nums[left] > nums[mid]) {
                right = mid - 1;
            } else {
                if (nums[left] <= target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        } else if (nums[mid] < target) {
            if (nums[left] > nums[mid]) {
                if (nums[left] >= target) {
                    if (nums[right] >= target) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                } else if (nums[right] >= target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                left = mid + 1;
            }
        } else {
            return mid;
        }
    }


    return nums[left] === target ? left : -1;
}

// nums = [4,5,6,7,0,1,2], target = 0
// nums = [4,5,6,7,0,1,2], target = 3
// nums = [5, 1, 3], target = 3
// nums = [4,5,6,7,0,1,2]
// target = 0
// nums = [5,1,2,3,4]
// target = 4
// search(nums, target)