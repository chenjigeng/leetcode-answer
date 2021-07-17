/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0,
    leftIndex = 0,
    rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    const max = Math.max(
      max,
      (rightIndex - leftIndex) * Math.min(height[leftIndex], height[rightIndex])
    );

    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return max;
};

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
