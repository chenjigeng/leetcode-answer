/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  let count = 0;
  const str = num.toString();
  /**
   *
   * @param {string} remain
   */
  const helper = (remain) => {
    if (remain.length === 0) {
      count++;
      return;
    }

    helper(remain.slice(1));
    if (remain.length > 1 && remain[0] !== "0") {
      const next = remain.slice(0, 2);

      if (+next >= 0 && +next <= 25) {
        helper(remain.slice(2));
      }
    }
  };

  helper(str);

  return count;
};

// console.log(translateNum(12258));
