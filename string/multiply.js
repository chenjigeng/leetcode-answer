// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var multiply = function(num1, num2) {
//   if(num1 === '0' || num2 === '0') return '0';
//   let result = '0';
//   for (let i = num1.length - 1; i >= 0; i--) {
//     let val = '0';
//     let currentVal = num1[i];
//     for (let j = num2.length - 1; j >= 0; j--) {
//       let cur = addZero(mul(currentVal, num2[j]), num2.length - j - 1);
//       val = add(val, cur);
//     }
//     result = add(result, addZero(val, num1.length - i - 1));
//   }

//   return result;
// };

// console.log(multiply('999', '999'));

// /**
//  * 
//  * @param {string} a 
//  * @param {string} b 
//  */
// function mul(a, b) {
//   return `${(+a * +b)}`;
// }

// function addZero(a, len) {
//   for (let i = 0; i < len; i++) {
//     a += '0';
//   }

//   return a;
// }

// /**
//  * 
//  * @param {string} a 
//  * @param {string} b 
//  */
// function add(a, b) {
//   let aIndex = a.length - 1, bIndex = b.length - 1;
//   let accu = 0;
//   let result = '';

//   while (aIndex >= 0 && bIndex >= 0) {
//     let cur = +b[bIndex--] + +a[aIndex--] + accu;
//     accu = 0;
//     while (cur >= 10) {
//       accu = 1;
//       cur = cur - 10;
//     }
//     result = cur + result;
//   }

//   if (aIndex >= 0) {
//     if (accu > 0) {
//       result = add(a.slice(0, aIndex + 1) + result, addZero(accu, a.length - aIndex - 1));
//     } else {
//       result = a.slice(0, aIndex + 1) + result;
//     }
//   } else if (bIndex >= 0) {
//     if (accu > 0) {
//       result = add(b.slice(0, bIndex + 1) + result, addZero(accu, b.length - bIndex - 1));
//     } else {
//       result = b.slice(0, bIndex + 1) + result;
//     }
//   } else if (accu > 0) {
//     result = `${accu}` + result;
//   }

//   // console.log(a, b, result)

//   return result;
// }

// // console.log(add('8991', '89910'));

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const result = [];
  for (let i = 0; i < num1.length + num2.length; i++) {
    result[i] = 0;
  }

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      const index = (num1.length - i - 1) + (num2.length - j - 1);
      result[index] += +num1[i] * +num2[j];
    }
  }


  for (let i = 0; i < result.length; i++) {
    while (result[i] >= 10) {
      result[i] -= 10;
      result[i + 1]++;
    }
  }

  while (result[result.length - 1] === 0) result.splice(result.length - 1, 1);

  return result.reverse().join('') || '0';
}


// console.log(multiply('999', '999'));
// console.log(multiply('0', '999'));

// console.log(multiply('456', '123'));
