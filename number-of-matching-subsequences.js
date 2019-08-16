/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let matchIndex = 0;
    for (let j = 0; j < S.length; j++) {
      if (word[matchIndex] === S[j]) {
        matchIndex++;
      }
      if (matchIndex === word.length) {
        count++;
        break;
      }
    }
  }

  return count;
};

// console.log(numMatchingSubseq('abcde', ["a", "bb", "acd", "ace"]))