/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const cached = {};
  /**
   *
   * @param {string} char
   * @returns
   */
  const backTracking = (char) => {
    if (!char) return true;
    if (typeof cached[char] !== "undefined") return cached[char];
    cached[char] = !!wordDict
      .filter((item) => char.indexOf(item) === 0)
      .find((item) => backTracking(char.slice(item.length)));

    return cached[char];
  };

  return backTracking(s);
};
