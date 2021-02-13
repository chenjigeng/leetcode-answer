/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const left = [], right = [];
    let stack = [];
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }

        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i)
    }

    stack = [];

    for (let i = heights.length - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }

        right[i] = stack.length === 0 ? heights.length : stack[stack.length - 1];
        stack.push(i)
    }

    for (let i = 0; i < left.length; i++) {
        res = Math.max(res, heights[i] * (right[i] - left[i] - 1));
    }

    // console.log(left, right);

    // while (stack.length) {
    //     const top = stack.pop();
    //     const right = heights.length - 1;

    //     res = Math.max(res, (right - top.index) * top.val);
    // }

    return res;
};

// console.log(largestRectangleArea([2,1,5,6,2,3]));
// console.log(largestRectangleArea([6,7,5,2,4,5,9,3]));