/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const allWordsMap = {};

  for (let i = 0; i < words.length; i++) {
    if (!allWordsMap[words[i]]) {
      allWordsMap[words[i]] = 0;
    }

    allWordsMap[words[i]]++;
  }

  let amount = words.length;
  let current = 0;

  let map = {};
  const result = [];

  let step = words[0].length;

  for (let j = 0; j < step; j++) {
    for (let i = j; i < s.length; i += step) {
      const currentWord = s.slice(i, i + step);

      if (allWordsMap[currentWord]) {
        if (!map[currentWord]) {
          map[currentWord] = 0;
        }
        map[currentWord]++;

        if (map[currentWord] <= allWordsMap[currentWord]) {
          current++;
        } else {
          let index = i - current * step;
          for (let j = index; j < i; j += step) {
            let cur = s.slice(j, j + step);

            map[cur]--;
            current--;
            if (cur === currentWord) {
              break;
            }
          }
          current++;
        }

        if (current === amount) {
          result.push(i - (amount - 1) * step);
          let firstWord = s.slice(
            i - (amount - 1) * step,
            i - (amount - 2) * step
          );
          map[firstWord]--;
          current--;
        }
      } else {
        current = 0;
        map = {};
      }
    }
    current = 0;
    map = {};
  }

  return result.sort((a, b) => a - b);
};

// (s = "barfoothefoobarman"), (words = ["foo", "bar"]);

// console.log(
//   findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
// );
// console.log(findSubstring(s, words));

// console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));

// console.log(
//   findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
//     "fooo",
//     "barr",
//     "wing",
//     "ding",
//     "wing",
//   ])
// );

// console.log(findSubstring("aaaaaaaaaaaaaa", ["aa", "aa"]));

console.log(process);
