/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  /**
   *
   * @param {string} str
   */
  const getNext = (str) => {
    let j = -1,
      i = 1;
    const next = [-1];

    while (i < str.length) {
      while (j >= 0 && str[j + 1] !== str[i]) {
        j = next[j];
      }

      if (str[j + 1] === str[i]) {
        j++;
      }

      next.push(j);
      i++;
    }

    return next;
  };

  const next = getNext(needle);

  // console.log(next);

  let j = -1;

  for (let i = 0; i < haystack.length; i++) {
    while (j >= 0 && needle[j + 1] !== haystack[i]) {
      j = next[j];
    }

    if (needle[j + 1] === haystack[i]) {
      j++;
    }

    console.log(j);

    if (j === needle.length - 1) {
      return i - needle.length + 1;
    }
  }

  return -1;
};

// console.log(strStr('abeababeabf', 'abeabf'));
// console.log(strStr('mississippi', 'issip'));
