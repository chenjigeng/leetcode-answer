/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let left = 0,
    right = this.arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (this.arr[mid] < num) {
      left = mid + 1;
    } else if (this.arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid;
      break;
    }
  }

  this.arr.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.arr.length % 2 === 0) {
    return (
      (this.arr[this.arr.length / 2 - 1] + this.arr[this.arr.length / 2]) / 2
    );
  } else {
    return this.arr[(this.arr.length - 1) / 2];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
