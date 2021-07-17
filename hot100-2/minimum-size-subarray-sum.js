/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let sums = []
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return 1;
    sum += nums[i]
    sums.push(sum)
  }


  let min = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    let prefix = i === 0 ? 0 : sums[i - 1];


    let left = i, right = nums.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (sums[mid] - prefix === target) {
        left = mid;
        break;
      }

      if (sums[mid] - prefix > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    
    if (sums[left] - prefix >= target) {
      min = Math.min(min, left - i + 1);
    }
  }

  return min === Number.MAX_VALUE ? 0 : min;
};

// console.log(minSubArrayLen(80, [10,5,13,4,8,4,5,11,14,9,16,10,20,8]))