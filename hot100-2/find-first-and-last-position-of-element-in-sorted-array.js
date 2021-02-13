/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let start = 0,
        end = nums.length - 1;
    while (start < end - 1) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid;
        }
    }

    let bound = [-1, -1];

    if (nums[end] === target) {
        bound[1] = end;
    } else if (nums[start] === target) {
        bound[1] = start;
    }

    (start = 0), (end = nums.length - 1);
    while (start < end - 1) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            end = mid;
        }
    }

    if (nums[start] === target) {
        bound[0] = start;
    } else if (nums[end] === target) {
        bound[0] = end;
    }
    // console.log(bound);

    return bound;
};

// searchRange([5, 7, 7, 8, 8, 10], 8);
// searchRange((nums = [5, 7, 7, 8, 8, 10]), (target = 6));
// searchRange((nums = []), (target = 0));
