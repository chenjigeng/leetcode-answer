// class Heap {
//     constructor(arr = []) {
//         this.arr = arr;
//         // this.sort();
//     }

//     pop() {
//         const pop = this.arr.pop();
//         if (this.arr.length !== 0) {
//             this.arr[0] = pop;
//             this.helper(0);
//         }
//     }

//     replaceHeader(head) {
//         this.arr[0] = head;
//         this.helper(0);
//     }

//     insert(num) {
//         const len = this.arr.length;
//         this.arr[len] = num;

//         let index = len;

//         while (index > 0) {
//             const parent = Math.floor((index - 1) / 2);
//             if (parent < 0) {
//                 break;
//             }

//             if (this.arr[parent] > num) {
//                 this.arr[index] = this.arr[parent];
//                 index = parent;
//             } else {
//                 break;
//             }
//         }

//         this.arr[index] = num;
//     }

//     sort() {
//         for (let i = Math.floor(this.arr.length / 2); i >= 0; i--) {
//             this.helper(i);
//         }
//     }

//     helper(index) {
//         let son, sonIndex;
//         let target = this.arr[index];

//         while (index < this.arr.length) {
//             let leftSon = index * 2 + 1,
//                 rightSon = index * 2 + 2;

//             if (leftSon >= this.arr.length) {
//                 break;
//             }

//             if (
//                 rightSon < this.arr.length &&
//                 this.arr[leftSon] > this.arr[rightSon]
//             ) {
//                 son = this.arr[rightSon];
//                 sonIndex = rightSon;
//             } else {
//                 son = this.arr[leftSon];
//                 sonIndex = leftSon;
//             }

//             if (son >= target) {
//                 break;
//             } else {
//                 this.arr[index] = son;
//                 index = sonIndex;
//             }
//         }

//         this.arr[index] = target;
//     }
// }

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function (nums, k) {
//     // const arr = nums.slice(0, k);

//     const heap = new Heap([]);

//     for (let i = 0; i < k; i++) {
//         heap.insert(nums[i]);
//     }

//     for (let i = k; i < nums.length; i++) {
//         if (nums[i] > heap.arr[0]) {
//             heap.replaceHeader(nums[i]);
//         }
//     }

//     // console.log(heap);

//     return heap.arr[0];
// };

// findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
// findKthLargest([7, 6, 5, 4, 3, 2, 1], 5);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    /**
     *
     * @param {number[]} arr
     * @param {number} kk
     */
    const helper = (arr, kk) => {
        const target = arr[0];

        const left = [],
            right = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > target) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        if (left.length >= kk) {
            return helper(left, kk);
        }

        if (left.length === kk - 1) {
            return target;
        }

        return helper(right, kk - left.length - 1);
    };

    return helper(nums, k);
};

// findKthLargest([2, 1], 2);
