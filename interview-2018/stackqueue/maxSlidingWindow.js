/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const queue = new MonotonicQueue();
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      queue.push(nums[i]);
    } else {
      queue.push(nums[i]);
      res.push(queue.max());
      queue.pop(nums[i - k + 1]);
    }
  }

  return res;
};

class MonotonicQueue {
  constructor() {
    this.arr = [];
  }

  push(num) {
    while (this.arr.length > 0 && this.arr[this.arr.length - 1] < num) {
      this.arr.pop();
    }

    this.arr.push(num);
  }

  max() {
    return this.arr[0];
  }

  pop(num) {
    if (this.arr.length > 0 && this.arr[0] === num) {
      this.arr.shift();
    }
  }
}