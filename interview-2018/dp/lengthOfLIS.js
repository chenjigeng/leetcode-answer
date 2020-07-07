/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let max = -1;
  const arr = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const pos = findPos(arr, 0, arr.length - 1, nums[i]);

    if (pos === 0) {
      arr.unshift(nums[i]);
    } else if (pos === arr.length - 1) {
      arr.push(nums[i]);
    } else {
      arr.splice(pos, 0, nums[i]);
    }
  }
}

function findPos(nums, start, end, target) {
  if (start >= end) return end;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = [];
  let result = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    let max = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        max = Math.max(max, dp[j] + 1);
      }
    }

    result = Math.max(result, max);

    dp[i] = max;
  }

  return result;
};