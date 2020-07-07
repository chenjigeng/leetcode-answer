/**
 *
 *
 * @param {Array} arr
 */
function quicksort(arr) {
  const queue = [];
  queue.push({
    start: 0,
    end: arr.length - 1,
  });

  while (queue.length > 0) {
    const { start, end } = queue.shift();
    const mid = partition(arr, start, end);
    if (mid === -1) continue;
    queue.push({
      start: start,
      end: mid - 1,
    });
    queue.push({
      start: mid + 1,
      end: end,
    });
  }
  console.log(arr)
  return arr;
}

/**
 *
 *
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 */
function partition(arr, start, end) {
  if (start >= end) return -1;
  let val = arr[start];
  let l = start, r = end;
  while (l < r) {
    if (arr[r] >= val && l < r) r--;
    arr[l] = arr[r];
    if (arr[l] < val && l < r) l++;
    arr[r] = arr[l];
  }
  arr[l] = val;

  return l;
}

quicksort([1,5,6,2, 3])