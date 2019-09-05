/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   let zeroIndex = 0, zeroCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       if (zeroCount > 0) {
//         swap(nums, zeroIndex, i);
//         if (zeroCount > 1) {
//           zeroIndex++;
//         } else {
//           zeroIndex = i;
//         }
//       }
//     } else {
//       if (zeroCount === 0) {
//         zeroIndex = i;
//       }
//       zeroCount++;
//     }
//   }

//   return nums;
// };

// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// arr = [0,1,0,3,12];

// console.log(moveZeroes(arr));

var moveZeroes = function(nums) {
  let zeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[zeroIndex++] = nums[i];
    }
  }

  for (let i = zeroIndex; i < nums.length ;i++) {
    nums[i] = 0;
  }
};
