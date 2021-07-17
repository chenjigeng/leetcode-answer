/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const version1Arr = version1.split('.')
  const version2Arr = version2.split('.')
  let version1Index = 0, version2Index = 0;

  while (version1Index < version1Arr.length && version2Index < version2Arr.length) {
    let v1 = +version1Arr[version1Index++], v2 = +version2Arr[version2Index++]

    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    }
  }

  if (version2Index < version2Arr.length) {
    for (let i = version2Index; i < version2Arr.length; i++) {
      if (+version2Arr[i] !== 0) {
        break;
      }

      if (i === version2Arr.length - 1) {
        return 0
      }
    }
    return -1;
  } else if (version1Index < version1Arr.length) {
    for (let i = version1Index; i < version1Arr.length; i++) {
      if (+version1Arr[i] !== 0) {
        break;
      }

      if (i === version1Arr.length - 1) {
        return 0
      }
    }
    return 1;
  }

  return 0
};

// console.log(compareVersion("1.01", "1.001"))