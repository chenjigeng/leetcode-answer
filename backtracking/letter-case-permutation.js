/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const res = [];
  permutation(S, 0, res, '');
  // console.log(res);
  return res;
};


function permutation(S, index, res, s) {
  if (index === S.length) {
    res.push(s);
    return;
  }

  if ((S[index]  >= 'a' && S[index] <= 'z') || (S[index] >= 'A' && S[index] <= 'Z')) {
    s += S[index].toLowerCase();
    permutation(S, index + 1, res, s);
    s = s.slice(0, s.length - 1);

    s += S[index].toUpperCase();
    permutation(S, index + 1, res, s);
    s = s.slice(0, s.length - 1);
  } else {
    permutation(S, index + 1, res, s + S[index]);
  }
}

function isNumber(c) {
  return c >= '0' && c <= '9';
}

letterCasePermutation("a1b2");