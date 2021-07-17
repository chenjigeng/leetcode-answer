/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0,
      right = i - 1;

    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  // console.log(count);
  return count;
};

// triangleNumber([2, 2, 2, 2, 3, 4]);
