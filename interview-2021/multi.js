/**
 *
 * @param {string} a
 * @param {string} b
 */
function multi(a, b) {
  const result = [];
  let maxStr = a.length > b.length ? a : b,
    minStr = a.length <= b.length ? a : b;

  maxStr = maxStr.split("").reverse();
  minStr = minStr.split("").reverse();

  for (let i = 0; i < minStr.length; i++) {
    for (let j = 0; j < maxStr.length; j++) {
      result[i + j] = +minStr[i] * +maxStr[j] + (result[i + j] || 0);
    }
  }

  console.log("result", result);

  let acu = 0;
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i] + acu;

    if (result[i] >= 10) {
      acu = Math.floor(result[i] / 10);
      result[i] -= 10 * acu;
    } else {
      acu = 0;
    }
  }

  if (acu > 0) {
    result.push(acu);
  }

  console.log(result);

  return result.reverse().join("");
}
console.log(multi("2222123", "44412"));

// 2222 * 444

// 8888
//  8888
//   8888
