/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const token = getNextToken(s, i);
    if (token === '/' || token === '*') {
      const leftValue = stack.pop();
      let operator = s[i];
      let rightValue;
      while (s[++i] === ' ') {
      }
      rightValue = getNextToken(s, i);
      i += rightValue.length - 1;
      if (operator === '/') {
        stack.push(Math.floor(+leftValue / +rightValue));
      } else {
        stack.push(+leftValue * +rightValue);
      }
    } else if (token !== ' ') {
      if (token === '+' || token === '-') {
        while (stack.length > 1) {
          const rightValue = stack.pop();
          const operator = stack.pop();
          const leftValue = stack.pop();
          let value;
          if (operator === '+') {
            value = +leftValue + +rightValue;
          } else if (operator === '-') {
            value = +leftValue - +rightValue;
          }
      
          stack.push(value);
        }
      }
      stack.push(token);
    }
    i += token.length - 1;
  }

  while (stack.length > 1) {
    const rightValue = stack.pop();
    const operator = stack.pop();
    const leftValue = stack.pop();
    let value;
    if (operator === '+') {
      value = +leftValue + +rightValue;
    } else if (operator === '-') {
      value = +leftValue - +rightValue;
    }

    stack.push(value);
  }

  return stack.pop();
};
const token = [' ', '/', '*', '+', '-'];
/**
 *
 *
 * @param {string} str
 * @param {number} i
 */
function getNextToken(str, i) {
  if (token.includes(str[i])) {
    return str[i];
  }
  for (let j = i; j < str.length; j++) {
    if (token.includes(str[j])) {
      return str.slice(i, j);
    }
  }

  return str.slice(i);
}

// const str = "1-1-1"
// const str = "3+22*2"
// const str = ' 33/2 ';
// const str = '0'
// const str = "1*2-3/4+5*6-7*8+9/10";
// console.log(calculate(str));