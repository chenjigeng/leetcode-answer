class Heap {
  constructor(arr = []) {
    this.arr = arr;

    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      this.adjust(i);
    }
  }

  top() {
    return this.arr[0];
  }

  replace(n) {
    this.arr[0] = n;
    this.adjust(0);
  }

  adjust(index) {
    const item = this.arr[index];
    while (index < this.arr.length) {
      const leftIndex = index * 2 + 1,
        rightIndex = index * 2 + 2;

      if (leftIndex >= this.arr.length) break;

      let nextIndex = leftIndex;

      if (
        rightIndex < this.arr.length &&
        this.arr[rightIndex] > this.arr[leftIndex]
      ) {
        nextIndex = rightIndex;
      }

      if (this.arr[nextIndex] > item) {
        this.arr[index] = this.arr[nextIndex];
        index = nextIndex;
      } else {
        break;
      }
    }

    this.arr[index] = item;
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  const initArr = arr.slice(0, k);
  const heap = new Heap(initArr);

  for (let i = k; i < arr.length; i++) {
    if (heap.top() > arr[i]) {
      heap.replace(arr[i]);
    }
  }

  console.log(heap);
  return heap.arr;
};

// (arr = [1, 3, 5, 7, 2, 4, 6, 8]), (k = 4);

// smallestK(arr, k);

function A() {
  arguments.m;
}
