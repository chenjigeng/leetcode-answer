/**
 *
 *
 * @param {Array} arr
 * @returns
 */
function mergeSort(arr) {
  const back = [];
  for (let step = 1; step < arr.length; step *= 2) {
    for (let j = 0; j < arr.length; j += 2 * step) {
      let leftStart = j, leftEnd = j + step - 1, rightStart = Math.min(j + step, arr.length - 1), rightEnd = Math.min(j + 2 * step - 1, arr.length - 1);
      let index = j;
      while (leftStart <= leftEnd && rightStart <= rightEnd) {
        if (arr[leftStart] < arr[rightStart]) {
          back[index++] = arr[leftStart++];
        } else {
          back[index++] = arr[rightStart++];
        }
      }
      while (leftStart <= leftEnd) {
        back[index++] = arr[leftStart++];
      }

      while (rightStart <= rightEnd) {
        back[index++] = arr[rightStart++];
      }
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = back[i];
    }
  }

  return arr;
}


// console.log(mergeSort(
//   [2,3,1]));