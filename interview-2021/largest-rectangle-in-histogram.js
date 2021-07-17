/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let leftMax = [0],
    rightMax = [];
  rightMax[heights.length - 1] = 0;

  for (let i = 1; i < heights.length; i++) {
    let count = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (heights[j] >= heights[i]) {
        count++;
      } else {
        break;
      }
    }

    leftMax[i] = count;
  }

  for (let i = heights.length - 2; i >= 0; i--) {
    let count = 0;
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] >= heights[i]) {
        count++;
      } else {
        break;
      }
    }

    rightMax[i] = count;
  }
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    max = Math.max(max, heights[i] * (1 + leftMax[i] + rightMax[i]));
  }

  return max;
};

// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
