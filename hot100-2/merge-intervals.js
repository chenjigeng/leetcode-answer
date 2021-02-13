/**
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }

        return a[1] - b[1];
    });

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const leftBound = intervals[i][0],
            rightBound = intervals[i][1];

        const top = result[result.length - 1];

        // 包含
        if (top[0] <= leftBound && top[1] >= rightBound) {
            continue;
        } else if (
            top[0] <= leftBound &&
            top[1] >= leftBound &&
            top[1] <= rightBound
        ) {
            result[result.length - 1] = [top[0], rightBound];
        } else {
            result.push([leftBound, rightBound]);
        }
    }

    return result;
};

// console.log(
//     merge([
//         [1, 3],
//         [2, 6],
//         [8, 10],
//         [15, 18],
//     ])
// );

// merge([
//     [1, 4],
//     [2, 3],
// ]);
