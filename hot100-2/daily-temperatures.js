/**
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
 * 你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const result = [];

  const map = {};

  for (let i = T.length - 1; i >= 0; i--) {
    map[T[i]] = i;
    let min = Number.MAX_VALUE;
    for (let j = T[i] + 1; j <= 100; j++) {
      if (map[j]) {
        min = Math.min(min, map[j]);
      }
    }

    if (min !== Number.MAX_VALUE) {
      result[i] = min - i;
    } else {
      result[i] = 0;
    }
  }

  // console.log(result);
  return result;
};

// dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
