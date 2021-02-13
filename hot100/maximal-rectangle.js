/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;
    
    const heights = [];
    const lefts = [];
    const rights = [];
    
    const n = matrix[0].length;
    let maxArea = 0;

    for (let i = 0; i < n; i++) {
        heights[i] = 0;
        lefts[i] = 0;
        rights[i] = n;
    }

    for (let i = 0; i < matrix.length; i++) {
        let cur_left = 0, cur_right = n;
        for (let j = 0; j < n; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }

        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                lefts[j] = Math.max(lefts[j], cur_left);
            } else {
                lefts[j] = 0;
                cur_left = j + 1;
            }
        }

        for (let j = n - 1; j >= 0; j--) {
            if (matrix[i][j] === '1') {
                rights[j] = Math.min(rights[j], cur_right);
            } else {
                rights[j] = n;
                cur_right = j;
            }
        }
        
        for (let j = 0; j < n; j++) {
            maxArea = Math.max(maxArea, heights[j] * (rights[j] - lefts[j]));
        }
    }

    return maxArea;
};