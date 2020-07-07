/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let index = -1;
  for (let i = 0; i < s1.length; i++) {
    index = s2.indexOf(s1[i], index + 1);
    
    console.log(index)
    if (index <= 0) return false;
  }

  return true;
};

s1 = "ab";
s2 = "eidbaooo"

console.log(checkInclusion(s1, s2));