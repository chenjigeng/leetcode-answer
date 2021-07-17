/**
 *
 * @param {string} str
 */
function reverseString(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    let j = i;
    while (j < str.length && str[j] !== ".") {
      j++;
    }

    result.push(str.slice(i, j));
    i = j;
  }

  return result.reverse().join(".");
}

console.log(reverseString("www.toutiao.com.cn"));
