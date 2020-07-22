/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max  = 0;
    let left = 0, right = height.length - 1;

    while (left < right) {
        max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};