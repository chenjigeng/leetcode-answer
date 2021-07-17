/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  const result = Array(n).fill("a");

  let remain = k - n,
    index = n - 1;
  while (remain && index >= 0) {
    if (remain > 25) {
      remain -= 25;
      result[index--] = "z";
    } else {
      result[index] = String.fromCharCode("a".charCodeAt(0) + remain);
      break;
    }
  }

  return result.join("");
};

// getSmallestString(5, 73);
