class Heap {
  constructor(compare) {
    this.arr = [];
    this.compare = compare;
  }

  sort() {
    for (let i = Math.floor(this.arr.length / 2) - 1; i >= 0; i--) {
      this.adjustBottom(i);
    }
  }

  adjustToBottom(index) {
    let cur = this.arr[index];

    while (index < this.arr.length) {
      let childIndex = index * 2 + 1;

      if (childIndex >= this.arr.length) {
        break;
      }

      if (
        childIndex + 1 < this.arr.length &&
        this.compare(this.arr[childIndex + 1], this.arr[childIndex] > 0)
      ) {
        childIndex = childIndex + 1;
      }

      if (this.compare(cur, this.arr[childIndex])) {
        break;
      } else {
        this.arr[index] = this.arr[childIndex];
        index = childIndex;
      }
    }

    this.arr[index] = cur;
  }

  adjustToTop(index) {
    let cur = this.arr[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (parentIndex < 0) {
        break;
      }

      if (this.compare(this.arr[parentIndex], cur) > 0) {
        break;
      }

      this.arr[index] = this.arr[parentIndex];
      index = parentIndex;
    }

    this.arr[index] = cur;
  }

  insert(num) {
    this.arr.push(num);
    this.adjustToTop(this.arr.length - 1);
  }

  size() {
    return this.arr.length;
  }

  pop() {
    if (this.arr.length === 1) {
      return this.arr.pop();
    }
    const top = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.adjustToBottom(0);

    return top;
  }

  top() {
    return this.arr[0];
  }
}

// const maxHeap = new Heap((a, b) => a - b);

// maxHeap.insert(1);
// maxHeap.insert(2);
// maxHeap.insert(3);
// console.log(maxHeap);
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
  this.minHeap = new Heap((a, b) => b - a);
  this.maxHeap = new Heap((a, b) => a - b);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.size() !== this.minHeap.size()) {
    this.minHeap.insert(num);
    this.maxHeap.insert(this.minHeap.pop());
  } else {
    this.maxHeap.insert(num);
    this.minHeap.insert(this.maxHeap.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  // console.log(this.maxHeap, this.minHeap);
  if (this.maxHeap.size() !== this.minHeap.size()) {
    return this.minHeap.top();
  } else {
    return (this.maxHeap.top() + this.minHeap.top()) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// var obj = new MedianFinder();
// obj.addNum(1);
// obj.addNum(2);
// console.log(obj.findMedian());
// obj.addNum(3);
// console.log(obj.findMedian());
