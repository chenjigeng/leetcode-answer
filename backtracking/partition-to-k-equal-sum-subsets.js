/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  let sum = 0;
  let max = -1;
  const used = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    used[i] = false;
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  if (sum % k !== 0 || max > sum / k) {
    return false;
  }

  const target = sum / k;
  return backTracking(nums, target, k, 0, 0, used);
};

function backTracking(nums, target, k, cur, start, used,) {
  if (k === 0) {
    return true;
  }

  if (cur === target) {
    return backTracking(nums, target, k - 1, 0, 0, used);
  }

  for (let i = start; i < nums.length; i++) {
    if (!used[i] && cur + nums[i] <= target)  {
      used[i] = true;
      if(backTracking(nums, target, k, cur + nums[i], i, used)) return true;
      used[i] = false;
    }
  }

  return false;
}

// console.log(canPartitionKSubsets([4,3,2,3,5,2,1], 4));