/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let start = 0,
        end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        let middleEle = nums[mid],
            startEle = nums[start],
            endEle = nums[end];

        let middleInUnSort = middleEle < nums[0];

        if (middleEle === target) {
            return mid;
        }

        if (middleInUnSort) {
            if (middleEle < target) {
                if (endEle >= target) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            } else {
                end = mid - 1;
            }
        } else {
            if (middleEle > target) {
                if (startEle <= target) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else {
                start = mid + 1;
            }
        }
    }

    if (nums[start] === target) {
        return start;
    }

    return -1;
};

// search((nums = [4, 5, 6, 7, 0, 1, 2]), (target = 0));
// search((nums = [4, 5, 6, 7, 0, 1, 2]), (target = 3));
// search((nums = [1]), (target = 0));
// search([1, 3], 2);
// console.log(search([5, 1, 3], 3));
