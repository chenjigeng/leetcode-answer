/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const leftHeight = [0],
        rightHeight = [];

    let maxHeight = 0;

    for (let i = 0; i < height.length - 1; i++) {
        if (height[i] > maxHeight) {
            maxHeight = height[i];
        }

        leftHeight[i + 1] = maxHeight;
    }

    maxHeight = 0;

    for (let i = height.length - 1; i > 0; i--) {
        if (height[i] > maxHeight) {
            maxHeight = height[i];
        }

        rightHeight[i - 1] = maxHeight;
    }

    let result = 0;

    for (let i = 1; i < height.length - 1; i++) {
        let minHeight = Math.min(leftHeight[i], rightHeight[i]);

        if (minHeight > height[i]) {
            result += minHeight - height[i];
        }
    }

    // console.log(result, leftHeight, rightHeight);

    return result;
};

// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
