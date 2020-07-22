/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let leftBound = -1, rightBound = -1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    leftBound = left;
    left = 0, right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid;
            if (nums[left + 1] !== target) {
                break;
            }
            left = mid + 1;
        }
    }

    rightBound = left;

    if (nums[leftBound] !== target) {
        return [-1, -1];
    }

    console.log(leftBound, rightBound);

    return [leftBound, rightBound];
};

// function helper(nums, l)

// nums = [5,7,7,8,8,10], target = 8
// nums = [5,7,7,8,8,10], target = 6
// nums  = [2,2]
// target = 2
// nums = [1,2,3,3,3,3,4,5,9]
// target = 3
// searchRange(nums, target)