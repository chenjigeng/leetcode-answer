/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = [];
  const result = [];

  for (let i = 0; i < k; i++) {
    if (queue.length === 0) {
      queue.push(nums[i]);
    } else {
      while (queue.length > 0 && nums[i] > queue[queue.length - 1]) {
        queue.pop();
      }

      queue.push(nums[i]);
    }
  }

  result.push(queue[0]);

  for (let i = k; i < nums.length; i++) {
    if (nums[i - k] === queue[0]) {
      queue.shift();
    }

    while (queue.length > 0 && nums[i] > queue[queue.length - 1]) {
      queue.pop();
    }

    queue.push(nums[i]);
    result.push(queue[0]);
  }

  console.log(result);
  return result;
};
