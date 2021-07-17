/**
 *
 * @param {string} a
 * @param {string} b
 */
function add(a, b) {
  const arrA = a.split("").reverse(),
    arrB = b.split("").reverse();
  const maxArr = arrA.length > arrB.length ? arrA : arrB;

  let minLen = Math.min(arrA.length, arrB.length);
  const result = [];

  let acu = 0;

  for (let i = 0; i < minLen; i++) {
    result[i] = +arrA[i] + +arrB[i] + acu;

    if (result[i] >= 10) {
      result[i] -= 10;
      acu = 1;
    } else {
      acu = 0;
    }
  }

  if (maxArr.length > minLen) {
    for (let i = minLen; i < maxArr.length; i++) {
      result[i] = +maxArr[i] + acu;

      if (result[i] >= 10) {
        result[i] -= 10;
        acu = 1;
      } else {
        acu = 0;
      }
    }
  }

  if (acu) {
    result.push(1);
  }

  return result.reverse().join("");
}

console.log(add("1211172", "2228"));
