/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  const initialArr = []

  const result = []

  const isOk = (index) => {
      for (let i = 0; i < initialArr.length; i++) {
          if (initialArr[i] === index) return false;

          if (initialArr[i] + (initialArr.length - i) === index || initialArr[i] - (initialArr.length - i) === index) {
              return false;
          }
      }

      return true;
  }

  const backTracking = (index) => {
      if (index === n) {
          result.push([...initialArr]);
          return;
      }
      for (let i = 0; i < n; i++) {
          if (isOk(i)) {
              initialArr.push(i);
              backTracking(index + 1);
              initialArr.pop();
          }
      }
  }

  backTracking(0);

  return result.map(item => {
    return item.map(num => {
      let i = '.'.repeat(n).split('')
      i[num] = 'Q';
      return i.join('');
    })

  })

};

// console.log(solveNQueens(4))