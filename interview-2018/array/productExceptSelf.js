/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//   const leftProducts = [], rightProducts = [];
//   for (let i = 0; i < nums.length; i++) {
//     const rightIndex = nums.length - i - 1;
//     if (i === 0) {
//       leftProducts.push([nums[i]]);
//       rightProducts[rightIndex] = nums[rightIndex];
//     } else {
//       leftProducts.push(leftProducts[i - 1] * nums[i]);
//       rightProducts[rightIndex] = rightProducts[rightIndex + 1] * nums[rightIndex];
//     }
//   }

//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       result[i] = rightProducts[i + 1];
//     } else if (i === nums.length - 1) {
//       result[i] = leftProducts[i - 1];
//     } else {
//       result[i] = leftProducts[i - 1] * rightProducts[i + 1];
//     }
//   }

//   return result;  
// };

var productExceptSelf = function(nums) {
  const result = [];
  let leftProduct = 1, rightProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = 1;
  }
  for (let i = 0; i < nums.length; i++) {

    result[i] *= leftProduct;
    leftProduct *= nums[i];

    result[nums.length - i - 1] *= rightProduct;
    rightProduct *= nums[nums.length - i - 1];
  }

  return result;
};

// console.log(productExceptSelf([1, 2, 3, 4]));