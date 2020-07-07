/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = [];

  backTracking(s, 0, [], result);

  // console.log(result);
  return result;
};

function backTracking(s, index, cur, result) {
  // console.log(index, cur, result);
  if (index >= s.length) return;
  if (cur.length === 3) {
    const num = s.slice(index);
    if (num.length <= 3 && +num >= 0 && +num <= 255) {
      if (+num !== 0 && num[0] === '0') {
        return;
      }
      if (+num === 0 && num.length > 1) {
        return;
      }
      cur.push(s.slice(index));

      result.push(cur.join('.'));
    } else {
      return;
    }
  }

  for (let i = index; i < s.length && i < index + 3; i++) {
    const num = s.slice(index, i + 1);
    if (num.length <= 3 && +num >= 0 && +num <= 255) {
      if (+num !== 0 && num[0] === '0') {
        continue;
      }
      if (+num === 0 && num.length > 1) {
        continue;
      }
      backTracking(s, i + 1, [...cur, num], result);
    }
  }
}

// restoreIpAddresses('010010')

// restoreIpAddresses('0000')

// restoreIpAddresses('25525511135')