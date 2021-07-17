/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (k === 0) return [];
  const result = [];
  const partition = (current) => {
    const mid = Math.floor(current.length / 2);

    let left = [],
      right = [];

    for (let i = 0; i < current.length; i++) {
      if (i === mid) continue;
      if (current[i] < current[mid]) {
        left.push(current[i]);
      } else {
        right.push(current[i]);
      }
    }

    let len = result.length + left.length + 1;
    if (len === k) {
      return [...result, ...left, current[mid]];
    } else if (len < k) {
      result.push(...left, current[mid]);
      return partition(right);
    } else {
      return partition(left);
    }
  };

  return partition(arr);
};

// console.log(getLeastNumbers([3, 2, 1], 2));
// console.log(getLeastNumbers([0, 1, 2, 1], 1));

// console.log(getLeastNumbers([0, 0, 0, 2, 0, 5], 0));
// console.log(getLeastNumbers([0, 0, 1, 2, 4, 2, 2, 3, 1, 4], 8));
