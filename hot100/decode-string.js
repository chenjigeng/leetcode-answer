/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  const getNumber = () => {
    let num = "";
    if (s[0] >= "0" && s[0] <= "9") {
      for (let i = 0; i < s.length; i++) {
        if (s[i] >= "0" && s[i] <= "9") {
          num += s[i];
        } else {
          break;
        }
      }
    }
    s = s.slice(num.length);
    return +num;
  };

  while (s) {
    let top = s[0];
    if (top >= "0" && top <= "9") {
      stack.push(getNumber());
      continue;
    } else if (
      top.toLocaleLowerCase() >= "a" &&
      top.toLocaleLowerCase() <= "z"
    ) {
      stack.push(top);
    } else if (top === "]") {
      let str = [];
      //   console.log(stack);

      while (stack.length) {
        const top = stack.pop();
        if (typeof top === "number") {
          stack.push(str.reverse().join("").repeat(top));
          break;
        } else {
          str.push(top);
        }
      }
    }
    s = s.slice(1);
  }

  return stack.join("");
};

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var decodeString = function (s) {
//   const getNumber = () => {
//     let num = "";
//     if (s[0] >= "0" && s[0] <= "9") {
//       for (let i = 0; i < s.length; i++) {
//         if (s[i] >= "0" && s[i] <= "9") {
//           num += s[i];
//         } else {
//           break;
//         }
//       }
//     }

//     s = s.slice(num.length);
//     return +num;
//   };

//   const numberStack = [];
//   /**
//    * @type {string[]}
//    */
//   const operatorStack = [];
//   let result = "";
//   let operator = "";

//   while (s) {
//     // console.log(operatorStack, numberStack, result, s);
//     // 数字
//     if (s[0] >= "0" && s[0] <= "9") {
//       if (operator) {
//         operatorStack.push(operator);
//         operator = "";
//       }
//       numberStack.push(getNumber());
//       continue;
//     }

//     if (s[0] === "[") {
//       if (operator) {
//         operatorStack.push(operator);
//         operator = "";
//       }
//     } else if (s[0] === "]") {
//       let currentOperator;
//       if (operator) {
//         currentOperator = operator;
//         operator = "";
//         if (numberStack.length === operatorStack.length) {
//           currentOperator = operatorStack.pop() + currentOperator;
//         }
//       } else {
//         currentOperator = operatorStack.pop();
//       }
//       const currentNumber = numberStack.pop();
//       let newOperator = currentOperator.repeat(currentNumber);

//       if (numberStack.length > 0) {
//         if (operatorStack.length > 0) {
//           operatorStack[operatorStack.length - 1] += newOperator;
//         } else {
//           operatorStack.push(newOperator);
//         }
//       } else {
//         result += newOperator;
//       }
//     } else {
//       if (numberStack.length === 0) {
//         result += s[0];
//       } else {
//         operator += s[0];
//       }
//     }
//     s = s.slice(1);
//   }

//   return result;
// };

// 输入：s = "3[a2[c]]"
// 输出："accaccacc"

// console.log(decodeString("3[a2[c]]"));

// console.log(decodeString("100[leetcode]"));
// console.log(decodeString("3[a]2[b4[F]c]"));

// console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));

// console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));

// console.assert(
//   decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef") ===
//     "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef",
//   true
// );
// "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef"
