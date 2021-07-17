/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  if (nums.length === 0) {
    return -1;
  }

  if (nums[0] >= k) return 1;
  let result = Number.MAX_VALUE;

  const sums = [0];
  let sum = 0;
  const queue = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sums.push(sum);
  }

  for (let i = 0; i <= nums.length; i++) {
    while (queue.length > 0 && sums[i] <= sums[queue[queue.length - 1]]) {
      queue.pop();
    }

    while (queue.length > 0 && sums[i] - sums[queue[0]] >= k) {
      result = Math.min(result, i - queue[0]);
      queue.shift();
    }

    queue.push(i);
  }

  return result === Number.MAX_VALUE ? -1 : result;
};

// console.log(shortestSubarray([2, -1, 2], 3));
//
