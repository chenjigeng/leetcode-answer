/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return []
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const top = result[result.length - 1];
        const item = intervals[i];

        if (item[0] > top[1])  {
            result.push(item);
        } else {
            top[1] = Math.max(top[1], item[1]);
        }
    }

    // console.log(result);

    return result;
};

// merge([[1,3],[2,6],[8,10],[15,18]])
// merge([[1,4],[4,5]])