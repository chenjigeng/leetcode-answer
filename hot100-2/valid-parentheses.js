const left = {
  "{": true,
  "(": true,
  "[": true,
};

const right = {
  "}": true,
  ")": true,
  "]": true,
};

const map = {
  "}": "{",
  "]": "[",
  ")": "(",
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (left[s[i]]) {
      stack.push(s[i]);
    } else if (right[s[i]]) {
      const top = stack[stack.length - 1];
      if (map[s[i]] !== top) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
};
