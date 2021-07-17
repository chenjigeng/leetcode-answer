/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let numbers = [],
    counts = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numbers[0]) {
      counts[0]++;
    } else if (arr[i] === numbers[1]) {
      counts[1]++;
    } else if (arr[i] === numbers[2]) {
      counts[2]++;
    } else if (counts[0] === 0) {
      numbers[0] = arr[i];
      counts[0] = 1;
    } else if (counts[1] === 0) {
      numbers[1] = arr[i];
      counts[1] = 1;
    } else if (counts[2] === 0) {
      numbers[2] = arr[i];
      counts[2] = 1;
    } else {
      counts[0]--;
      counts[1]--;
      counts[2]--;
    }
  }

  console.log(numbers, counts);

  if (counts[0] > counts[1] && counts[0] > counts[2]) {
    return numbers[0];
  } else if (counts[1] > counts[2] && counts[1] > counts[0]) {
    return numbers[1];
  }

  return numbers[2];
};

findSpecialInteger([1, 2, 5, 3, 2, 1, 6, 3, 1, 3, 2, 8, 1, 2, 3]);
