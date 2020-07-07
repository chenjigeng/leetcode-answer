/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // console.log(s.trim().split(' ').reverse())
  return s.trim().split(' ').reverse().filter(s => !!s).join(' ');
};

// console.log(reverseWords('  hello world!  '))

// console.log(reverseWords('a good   example'))