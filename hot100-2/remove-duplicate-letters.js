/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const stack = [];

  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 0;
    }
    map[s[i]]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (stack.includes(s[i])) {
      map[s[i]]--;

      continue;
    }

    while (
      stack.length > 0 &&
      stack[stack.length - 1] > s[i] &&
      map[stack[stack.length - 1]] > 0
    ) {
      stack.pop();
    }

    stack.push(s[i]);
    map[s[i]]--;
  }

  return stack.join("");
};
