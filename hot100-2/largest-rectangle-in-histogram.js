/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        let min = heights[i];
        for (let j = i; j < heights.length; j++) {
            min = Math.min(min, heights[j]);
            maxArea = Math.max(maxArea, min * (j - i + 1));
        }
    }

    return maxArea;
};
