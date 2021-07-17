/**
 *
 * @param {number[]} arr
 */
function summaryRanges(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let start = i;
    let end;
    let j = i + 1;

    if (j === arr.length || arr[j] !== arr[j - 1] + 1) {
      result.push(`${arr[i]}`);
      continue;
    }

    while (j < arr.length && arr[j] === arr[j - 1] + 1) {
      j++;
    }

    end = j - 1;
    result.push(`${arr[start]}->${arr[end]}`);
    i = end;
  }

  console.log(result);
}

summaryRanges([0, 1, 2, 4, 5, 7, 13, 15, 16]);
