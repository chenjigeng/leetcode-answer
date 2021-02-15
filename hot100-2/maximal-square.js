/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const left = [];

    for (let i = 0; i < matrix.length; i++) {
        left[i] = [];

        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "1") {
                left[i][j] = 1 + (j > 0 ? left[i][j - 1] : 0);
            } else {
                left[i][j] = 0;
            }
        }
    }

    let maxArea = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let minWidth = Number.MAX_VALUE;
            for (
                let height = 1;
                height <= i + 1 && height <= minWidth;
                height++
            ) {
                minWidth = Math.min(minWidth, left[i + 1 - height][j]);
                maxArea = Math.max(
                    maxArea,
                    Math.min(minWidth, height) * Math.min(minWidth, height)
                );
            }
        }
    }

    return maxArea;
};

// maximalSquare([
//     ["1", "0", "1", "0", "0"],
//     ["1", "0", "1", "1", "1"],
//     ["1", "1", "1", "1", "1"],
//     ["1", "0", "0", "1", "0"],
// ]);
