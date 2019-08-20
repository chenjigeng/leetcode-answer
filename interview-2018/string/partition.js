/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = [];
  const isPa = [];
  calcPalindrome(s, isPa);
  // console.log(isPa);
  backTracking(result, s, 0, [], isPa);
  return result;
};

function backTracking(result, s, index, arr, isPa) {
  if (index === s.length) {
    result.push([...arr]);
    return;
  }
  for (let i = index; i < s.length; i++) {
    if (isPa[index][i]) {
      arr.push(s.slice(index, i + 1));
      let removeIndex = arr.length - 1;
      backTracking(result, s, i + 1, arr, isPa);
      arr.splice(removeIndex, 1);
    }
  }
}

// console.log(partition("cbbbcc"))
/**
 * @param {string} s
 * @return {boolean}
 */
function calcPalindrome(s, arr) {
  for (let i = 0; i < s.length; i++) {
    arr[i] = [];
    for (let j = 0; j < s.length; j++) {
      arr[i][j] = false;
    }
    arr[i][i] = true;
  }

  for (let i = 0; i < s.length - 1; i++) {
    arr[i][i+1] = s[i] === s[i+1];
  }
  for (let i = s.length - 3; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      arr[i][j] = arr[i+1][j-1] && s[j] === s[i];
    }
  }
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));