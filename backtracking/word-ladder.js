/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const mark = {};
  const allCombo = {};
  wordList.push(beginWord);
  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    for (let j = 0; j < word.length; j++) {
      const newWord = `${word.slice(0, j)}*${word.slice(j + 1)}`;
      if (!allCombo[newWord]) {
        allCombo[newWord] = []
      }
      allCombo[newWord].push(word);
    }
  }

  const queue = [{
    word: beginWord,
    weight: 1,
  }];

  mark[beginWord] = true;

  while (queue.length > 0) {
    const {
      word,
      weight
    } = queue.shift();
    if (word === endWord) {
      return weight;
    }
    for (let i = 0; i < word.length; i++) {
      const newWord = `${word.slice(0, i)}*${word.slice(i + 1)}`;
      const words = allCombo[newWord].filter(item => !mark[item]);
      words.map(w => {
        mark[w] = true;
        queue.push({
          word: w,
          weight: weight + 1,
        })
      })
    }
  }

  return 0;
};

// console.log(ladderLength('hit','cog', ["hot","dot","dog","lot","log","cog"]));