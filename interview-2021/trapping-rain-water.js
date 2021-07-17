/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const leftMax = [height[0]],
    rightMax = [height[height.length - 1]];

  let max = height[0];

  for (let i = 1; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i];
    }
    leftMax.push(max);
  }

  max = height[height.length - 1];

  for (let j = height.length - 2; j >= 0; j--) {
    if (height[j] > max) {
      max = height[j];
    }

    rightMax.unshift(max);
  }

  // console.log(leftMax, rightMax);

  let result = 0;

  for (let i = 1; i < height.length - 1; i++) {
    const min = Math.min(leftMax[i], rightMax[i]);

    if (min > height[i]) {
      result += min - height[i];
    }
  }

  return result;
};

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
