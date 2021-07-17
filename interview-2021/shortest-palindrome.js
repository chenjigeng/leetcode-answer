/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
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

  str = s + '#' + s.split('').reverse().join('');

  const next = getNext(str);

  let index = next[str.length - 1];

  return (
    s
      .slice(index + 1)
      .split('')
      .reverse()
      .join('') + s
  );
};

// console.log(shortestPalindrome('abcd'));
// console.log(shortestPalindrome('aacecaaa'));
// console.log(shortestPalindrome('aacecaaa'));
