class Heap {
  constructor(arr) {
    this.arr = arr;
  }

  sort() {
    for (let i = Math.floor(this.arr.length / 2) - 1; i >= 0; i--) {
      this.adjustHeap(this.arr, i, this.arr.length);
    }

    for (let i = this.arr.length - 1; i > 0; i --) {
      this.swap(this.arr, i, 0);
      this.adjustHeap(this.arr, 0, i);
    }

    return this.arr;
  }

  swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  /**
   *
   *
   * @param {Array} arr
   * @param {number} i
   * @param {number} len
   * @memberof Heap
   */
  adjustHeap(arr, i, len) {
    const val = arr[i];
    while (i < len) {
      let childIndex = 2 * i + 1;
      if (childIndex >= len) break;
      if (childIndex + 1 < len && arr[childIndex] < arr[childIndex + 1]) {
        childIndex++;
      }

      if (arr[childIndex] <= val) {
        break;
      }
      arr[i] = arr[childIndex];
      i = childIndex;
    }

    arr[i] = val;
  }
}

var sortArray = function(nums) {
  const heap = new Heap(nums);
  return heap.sort();
};
// console.log(sortArray([-2, 3, -5]));

// console.log(sortArray([5,2,3,1]));