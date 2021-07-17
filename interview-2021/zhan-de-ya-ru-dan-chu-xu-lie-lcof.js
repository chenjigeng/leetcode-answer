/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let index = 0;
  pushed.map((item) => {
    stack.push(item);

    while (stack.length > 0 && popped[index] === stack[stack.length - 1]) {
      stack.pop();
      index++;
    }
  });

  return stack.length === 0;
};
