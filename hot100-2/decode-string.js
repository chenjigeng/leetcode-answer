/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") continue;

    if (s[i] >= "0" && s[i] <= "9") {
      let j = i;
      let current = "";
      while (s[j] >= "0" && s[j] <= "9") {
        current += s[j];
        j++;
      }

      stack.push(+current);

      i = j;
    } else if (s[i] === "]") {
      let current = "";
      while (true) {
        const top = stack.pop();
        if (typeof top === "number") {
          stack.push(current.repeat(top));
          break;
        } else {
          current = top + current;
        }
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};

// s = "2[abc]3[cd]ef";

// console.log(decodeString(s));
// "dd3[a2[c2[ab]c6[da]h]]"

// [3, 2]

// ['dd', '3', 'a', '2', 'c', 'abab', 'cdadadadadada']
