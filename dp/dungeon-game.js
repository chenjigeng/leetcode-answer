/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const arr = [];

  for (let i = dungeon.length - 1; i >= 0; i--) {
    arr[i] = [];
    for (let j = dungeon[i].length - 1; j >= 0; j--) {
      if (i === dungeon.length - 1 && j === dungeon[0].length - 1) {
        arr[i][j] = Math.max(0, -dungeon[i][j]);
      } else {
        const left = (arr[i + 1] || [])[j] === undefined ? 10000 : (arr[i + 1] || [])[j];
        const right = arr[i][j + 1] === undefined ? 10000 : arr[i][j + 1];
        arr[i][j] = Math.max(Math.min(left, right) - dungeon[i][j], 0);
      }
    }
  }

  return arr[0][0] + 1;
};


// /**
//  * @param {number[][]} dungeon
//  * @return {number}
//  */
// var calculateMinimumHP = function(dungeon) {
//   const map = new Map();
//   return helper(dungeon, 0, 0, map) + 1;
// };

// /**
//  *
//  *
//  * @param {number[][]} dungeon
//  * @param {number} i
//  * @param {number} j
//  * @param {Map} map
//  */
// function helper(dungeon, i, j, map) {
//   if (i >= dungeon.length) return 100000;
//   if (j >= dungeon[0].length) return 10000;

//   if (map.has(`${i}_${j}`)) return map.get(`${i}_${j}`)
//   if (i === dungeon.length - 1 && j === dungeon[0].length - 1) {
//     if (dungeon[i][j] >= 0) return 0;
//     return -dungeon[i][j];
//   }
//   const right = helper(dungeon, i, j + 1, map);
//   const bottom = helper(dungeon, i + 1, j, map);
//   const result = Math.min(right, bottom) - dungeon[i][j];
  
//   if (result < 0) {
//     map.set(`${i}_${j}`, 0);
//     return 0;
//   }
//   map.set(`${i}_${j}`, result);

//   return result;
// }

// const arr = [
//   [-2, -3, 3],
//   [-5, -10, 1],
//   [10, 30, -5]
// ]
// // arr = [[0, 0]]
// console.log(calculateMinimumHP(arr));