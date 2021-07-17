/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = [];
  result[temperatures.length - 1] = 0;

  const map = {};

  map[temperatures[temperatures.length - 1]] = temperatures.length - 1;

  for (let i = temperatures.length - 2; i >= 0; i--) {
    result[i] = 0;
    map[temperatures[i]] = i;
    let min = temperatures.length;

    for (let j = temperatures[i] + 1; j <= 100; j++) {
      if (map[j]) {
        min = Math.min(min, map[j] - i);
      }
    }

    if (min !== temperatures.length) {
      result[i] = min;
    }
  }

  return result;
};
