/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const top = result.pop();

    if (top[1] > intervals[i][0]) {
      top[1] = Math.max(top[1], intervals[i][1]);
      result.push(top);
    } else {
      result.push(top, intervals[i]);
    }
  }

  return result;
};
