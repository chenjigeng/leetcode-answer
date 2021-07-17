const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let result = [];

  for (let i = 0; i < digits.length; i++) {
    const currentResult = result;
    const newResult = [];

    const mapResult = map[digits[i]];

    if (currentResult.length === 0) {
      result = [...mapResult];
      continue;
    }

    currentResult.map((item) => {
      mapResult.map((i) => {
        newResult.push(item + i);
      });
    });

    result = newResult;
  }

  return result;
};
