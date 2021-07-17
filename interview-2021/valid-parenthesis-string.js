/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let leftStack = [],
    replaceStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      leftStack.push(i);
    } else if (s[i] === "*") {
      replaceStack.push(i);
    } else {
      if (leftStack.length > 0) {
        leftStack.pop();
        continue;
      }

      if (replaceStack.length > 0) {
        replaceStack.pop();
        continue;
      }

      return false;
    }
  }

  if (leftStack.length === 0) return true;

  if (leftStack.length > replaceStack.length) return false;
  let i = 0,
    j = 0;

  for (; i < leftStack.length && j < replaceStack.length; i++, j++) {
    while (j < replaceStack.length && leftStack[i] > replaceStack[j]) {
      j++;
    }
    if (j === replaceStack.length) return false;
  }

  if (i !== leftStack.length) return false;

  return true;
};

// console.log(checkValidString("())"));
// console.log(
//   checkValidString(
//     "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
//   )
// );
// checkValidString("()");
// checkValidString("(*))");
// checkValidString("()()");
// console.log(
//   checkValidString(
//     "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
//   )
// );
