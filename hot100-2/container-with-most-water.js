/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftIndex = 0,
    rightIndex = height.length - 1;

  let max = 0;

  while (leftIndex < rightIndex) {
    max = Math.max(
      max,
      Math.min(height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex)
    );
    if (height[leftIndex] > height[rightIndex]) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }

  return max;
};

// [1,8,6,2,5,4,8,3,7]

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
