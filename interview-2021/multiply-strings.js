/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const result = [];

  num1 = reverseString(num1);
  num2 = reverseString(num2);

  for (let i = 0; i < num1.length + num2.length; i++) {
    result[i] = 0;
  }
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      result[i + j] += num1[i] * num2[j];
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] >= 10) {
      let acu = Math.floor(result[i] / 10);
      result[i] = result[i] % 10;
      result[i + 1] += acu;
    }
  }

  while (result[result.length - 1] === 0) {
    result.pop();
  }

  console.log(result);
  return result.reverse().join("") || "0";
};

/**
 *
 * @param {string} s
 */
function reverseString(s) {
  return s.split("").reverse().join("");
}

// multiply("123", "456");
