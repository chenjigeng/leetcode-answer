/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let newArr = [];
    for (let j = 0; j < arr.length; ) {
      let index = 1;

      while (j + 1 < arr.length && arr[j] === arr[j + 1]) {
        index++;
        j++;
      }

      newArr.push(index, arr[j]);
      j++;
    }

    arr = newArr;
  }

  // console.log(arr);
  return arr.join("");
};

// countAndSay(3);
