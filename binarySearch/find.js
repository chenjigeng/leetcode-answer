/**
 *
 *
 * @param {Number} target
 * @param {Array[]} array
 */
function Find(target, array)
{
  let row = array.length - 1, col = array[0].length - 1;
  let startRow = 0, endCol = col;
  while (startRow <= row && endCol >= 0) {
    let value = array[startRow][endCol];
    if (value === target) return true;
    else if (value < target) {
      startRow++;
    } else {
      endCol--;
    }
  }

  return false;
    // write code here
}


const arr = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(Find(20, arr));

// f(n) = f(n - 1) + 1