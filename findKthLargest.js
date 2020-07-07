// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function(nums, k) {
//   k = k -1;
//   let start = 0, end = nums.length - 1;
//   let index;
//   while ((index = partition(nums, start, end)) >= 0 && index !== k) {
//     if (index < k) {
//       start = index + 1;
//     } else {
//       end = index - 1;
//     }
//   }
//   return nums[index];
// };

// function partition(nums, start, end) {
//   const target = nums[start];

//   while (start < end) {
//     while (nums[end] <= target && start < end) {
//       end--;
//     }
//     nums[start] = nums[end];
//     while (nums[start] >= target && start < end) {
//       start++;
//     }
//     nums[end] = nums[start];
//   }

//   nums[start] = target;

//   return start;
// }

// console.log(findKthLargest([3,2,1,5,6,4], 2));
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const initArr = [];
  for (let i = 0; i < k; i++) {
    initArr.push(nums[i]);
  }
  const heap = new Heap(initArr);

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > heap.top()) {
      heap.replace(nums[i]);
    }
  }

  // console.log(heap.top());

  return heap.top();
};

class Heap {
  constructor(arr) {
    /**
     * @type Array
     */
    this.arr = arr;
    this.buildHeap();
  }

  buildHeap() {
    for (let i = Math.floor(this.arr.length / 2); i >= 0; i--) {
      this.adjust(i);
    }
  }

  top() {
    return this.arr[0];
  }

  replace(item) {
    this.arr[0] = item;
    this.adjust(0);
  }

  adjust(index) {
    const arrLength = this.arr.length;
    const target = this.arr[index];
    while (index < arrLength) {
      let childIndex = index * 2 + 1;
      if (childIndex + 1 < arrLength && this.arr[childIndex + 1] < this.arr[childIndex]) {
        childIndex++;
      }
      if (childIndex > arrLength) {
        break;
      }
      if (this.arr[childIndex] < target) {
        this.arr[index] = this.arr[childIndex];
        index = childIndex;
      } else {
        break;
      }
    }

    this.arr[index] = target;
  }
}
// console.log(findKthLargest([3,2,1,5,6,4], 2));
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
