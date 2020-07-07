/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let start = 1, end = nums.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++;
    }
    if (count > mid) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  // console.log(start)
  return start;
};

// findDuplicate([1,3,4,2,2])
// findDuplicate([3,1,3,4,2]);