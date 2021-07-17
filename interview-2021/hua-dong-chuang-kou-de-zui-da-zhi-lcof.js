/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = [];

  const push = (num) => {
    if (queue.length === 0) {
      queue.push(num);
      return;
    }

    while (queue.length > 0 && queue[queue.length - 1] < num) {
      queue.pop();
    }

    queue.push(num);
  };

  const pop = (num) => {
    if (num === queue[0]) {
      queue.shift();
    }
  };

  const result = [];

  for (let i = 0; i < k - 1; i++) {
    push(nums[i]);
  }

  for (let i = k - 1; i < nums.length; i++) {
    push(nums[i]);
    const max = queue[0];
    result.push(max);
    pop(nums[i - k + 1]);
  }

  return result;
};
