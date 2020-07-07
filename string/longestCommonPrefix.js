/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  let maxStep = Number.MAX_VALUE;
  for (let i = 0; i < strs.length; i++) {
    maxStep = Math.min(strs[i].length, maxStep);
  }
  let currentCommon;
  for (let step = 1; step <= maxStep; step++) {
    currentCommon = strs[0].slice(0, step);

    for (let i = 0; i < strs.length; i++) {
      if (strs[i].slice(0, step) === currentCommon) continue;
      else return strs[0].slice(0, step - 1);
    }
  }

  return currentCommon;
};