/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      if (nums[left] + nums[right] + nums[i] === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) {
          left++;
        }

        while (nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        right--;
      } else {
        left++;
      }
    }

    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }

  return result;
};

// console.log(threeSum([1, -1, -1, 0]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
