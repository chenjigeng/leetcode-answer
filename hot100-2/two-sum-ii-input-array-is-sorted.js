/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let left = i + 1, right = numbers.length - 1;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (numbers[mid] + numbers[i] === target) {
        return [i + 1, mid + 1];
      }

      if (numbers[mid] + numbers[i] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    if (numbers[i] + numbers[left] === target) {
      return [i + 1, left + 1]
    }
  }
};