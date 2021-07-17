/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const queue = new MonoQueue();
    for (let i = 0; i < k; i++) {
        queue.push(nums[i]);
    }

    const result = [queue.arr[0]];

    for (let i = k; i < nums.length; i++) {
        queue.pop(nums[i - k]);
        queue.push(nums[i]);
        result.push(queue.arr[0]);
    }

    // console.log(result);
    return result;
};

class MonoQueue {
    constructor() {
        this.arr = [];
    }

    push(num) {
        while (this.arr.length > 0 && this.arr[this.arr.length - 1] < num) {
            this.arr.pop();
        }

        this.arr.push(num);
    }

    pop(num) {
        if (this.arr.indexOf(num) > -1 && this.arr[0] === num) {
            this.arr.shift();
        }
    }
}

// (nums = [1, 3, -1, -3, 5, 3, 6, 7]), (k = 3);

// nums = [9, 10, 9, -7, -4, -8, 2, -6];
// k = 5;
// maxSlidingWindow(nums, k);
