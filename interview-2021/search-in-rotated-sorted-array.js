/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      // 正常顺序
      if (nums[left] <= nums[mid]) {
        left = mid + 1;
      } else {
        if (nums[right] >= target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    } else {
      // 正常顺序
      if (nums[left] <= nums[mid]) {
        if (nums[left] <= target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

// (nums = [4, 5, 6, 7, 0, 1, 2]), (target = 0);
// (nums = [4, 5, 6, 7, 0, 1, 2]), (target = 3);
// (nums = [3, 1]), (target = 1);

// console.log(search(nums, target));
