/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const heap = new Heap(nums.slice(0, k));
  for (let i = k; i < nums.length; i++) {
    heap.insert(nums[i]);
    heap.delete();
  }

  console.log(heap.arr)
  return heap.arr[1];
};


class Heap {
  constructor(nums) {
    this.arr = [-1];
    this.init(nums);
  }

  init(nums) {
    for (let i = 0; i < nums.length; i++) {
      this.insert(nums[i]);
    }
  }

  delete() {
    const lastItem = this.arr[this.arr.length - 1];

    this.arr.splice(this.arr.length - 1, 1);
    this.replace(1, lastItem);
  }

  replace(index, item) {
    this.arr[index] = item;
    const leftChildren = this.arr[index * 2];
    const rightChildren = this.arr[index * 2 + 1] || 100000;
    const parentIndex = Math.floor(index / 2);
    if (leftChildren < item || rightChildren < item) {
      let parentIndex = index;
      while (parentIndex < this.arr.length && parentIndex > 0) {
        let index = parentIndex * 2;
        if (index > this.arr.length - 1) {
          break;
        }
        let value = this.arr[index];
        if (index + 1 < this.arr.length && value > this.arr[index + 1]) {
          value = this.arr[index + 1];
          index++;
        }

        if (item > value) {
          this.arr[parentIndex] = value;
          parentIndex = index;
        } else {
          break;
        }
      }
      this.arr[parentIndex] = item;
    } else if (parentIndex > 0 && this.arr[parentIndex] > item) {
      [this.arr[parentIndex], item] = [item, this.arr[parentIndex]];
    }
  }

  insert(num) {
    this.arr.push(num);
    let currentIndex = this.arr.length - 1;
    let parIndex = Math.floor(currentIndex / 2);
    while (parIndex > 0) {
      if (this.arr[parIndex] > num) {
        this.arr[currentIndex] = this.arr[parIndex];
        currentIndex = parIndex;
        parIndex = Math.floor(currentIndex / 2)
      } else {
        break;
      }
    }

    this.arr[currentIndex] = num;
  }
}


// const a = [3,2,1,5,6,4], k = 2;
// console.log(findKthLargest(a, k))


// const arr = [3,2,3,1,2,4,5,5,6], kk = 4;
// console.log(findKthLargest(arr, kk))
