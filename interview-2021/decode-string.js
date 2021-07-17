/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let str = [];

      while (stack[stack.length - 1] !== "[") {
        str.unshift(stack.pop());
      }

      stack.pop();
      const size = stack.pop();
      stack.push(str.join("").repeat(size));
    } else if (s[i] >= "0" && s[i] <= "9") {
      let number = "";
      while (s[i] >= "0" && s[i] <= "9") {
        number += s[i];
        i++;
      }
      i--;
      stack.push(+number);
    } else {
      stack.push(s[i]);
    }
  }

  // console.log(stack);
  return stack.join("");
};

// console.log(decodeString("100[leetcode]"));
// decodeString("3[a2[c]]");
// console.log(decodeString("abc3[cd]xyz"));
