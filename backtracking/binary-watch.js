 /**
 * https://leetcode-cn.com/problems/binary-watch/
 * @param {number} num
 * @return {string[]}
 */
// const arr = [100, 200, 400, 800, 1, 2, 4, 8, 16, 32];

// var readBinaryWatch = function(num) {
//   const res = [];
//   if (num === 0) return ['0:00'];
//   permutation(num , [], 0, res);
//   return transform(res);
// };

// function permutation(num, last, index, res) {
//   if (num === 1) {
//     for (let i = index; i < arr.length; i++) {
//       res.push([...last, arr[i]]);
//     }
//     return;
//   }

//   for (let i = index; i < arr.length; i++) {
//     if (arr.length - i < num) return;
//     last.push(arr[i]);
//     let len = last.length - 1;
//     permutation(num - 1, last, i + 1, res);
//     last.splice(len, 1);
//   }
// }

// function transform(res) {
//   // console.log(res)
//   const result = [];
//   for (let i = 0; i < res.length; i++) {
//     let hour = 0, min = 0;
//     for (let j = 0; j < res[i].length; j++) {
//       if (res[i][j] >= 100) {
//         hour += res[i][j] / 100;
//       } else {
//         min += res[i][j];
//       }
//     }
//     if (hour > 11 || min >= 60) continue;
//     // console.log(min)
//     // console.log(`${hour}:${min >= 10 ? min : '0' + min}`)
//     result.push(`${hour}:${min >= 10 ? min : '0' + min}`);
//   }

//   return result;
// }
// 遍历
var readBinaryWatch = function(nums) {
  const res = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      let num = (i << 6) + j;
      let count = 0;
      let mask = 1;
      for (let n = 0; n < 32; n++) {
        count += (num & mask) > 0 ? 1 : 0;
        mask = mask << 1;
      }
      if (count === nums) {
        res.push(`${i}:${j >= 10 ? j : `0${j}`}`);
      }
    }
  }
  console.log(res)
  return res;
};
// console.log(readBinaryWatch(2));

// ["0:03","0:05","0:06","0:09","0:10","0:12","0:17","0:18","0:20","0:24","0:33","0:34","0:36","0:40","0:48","1:01","1:02","1:04","1:08","1:16","1:32","2:01","2:02","2:04","2:08","2:16","2:32","3:00","4:01","4:02","4:04","4:08","4:16","4:32","5:00","6:00","8:01","8:02","8:04","8:08","8:16","8:32","9:00","10:00"]