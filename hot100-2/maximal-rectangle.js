/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    const left = [];

    for (let i = 0; i < matrix.length; i++) {
        left[i] = [];

        for (let j = 0; j < matrix[0].length; j++) {
            left[i][j] = 0;

            if (matrix[i][j] === "1") {
                if (j > 0) {
                    left[i][j] = left[i][j - 1] + 1;
                } else {
                    left[i][j] = 1;
                }
            }
        }
    }

    let maxArea = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let innerMaxArea = 0,
                minWidth = Number.MAX_VALUE;
            for (let height = 1; height <= i + 1; height++) {
                minWidth = Math.min(minWidth, left[i - height + 1][j]);
                innerMaxArea = Math.max(innerMaxArea, height * minWidth);
            }

            // console.log(i, j, innerMaxArea, maxArea);

            maxArea = Math.max(maxArea, innerMaxArea);
        }
    }

    // console.log(maxArea);
    return maxArea;
};

// maximalRectangle([
//     ["1", "0", "1", "0", "0"],
//     ["1", "0", "1", "1", "1"],
//     ["1", "1", "1", "1", "1"],
//     ["1", "0", "0", "1", "0"],
// ]);
