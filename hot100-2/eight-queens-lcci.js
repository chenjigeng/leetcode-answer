/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

  /**
   * 
   * @param {number[]} arr 
   * @param {number} item 
   */
  const check = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item || arr[i] + arr.length - i === item || arr[i] - arr.length + i === item) {
        return false;
      }
    }

    return true;
  }

  const result = []

  const backTracking = (index, currentArr) => {
    if (index === n) {
      console.log(currentArr);
      result.push([...currentArr]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (check(currentArr, i)) {
        backTracking(index + 1, [...currentArr, i]);
      }
    }
  }

  backTracking(0, []);

  return result.map(item => {
    return item.map(i => {
      let str = '.'.repeat(n);
      return str.slice(0, i) + 'Q' + str.slice(i + 1);
    })
  })
};

// console.log(solveNQueens(4))