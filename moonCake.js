/**
 *
 *
 * @param {Array} score
 */
function moonCake(score) {
  const cakes = [];
  for (let i = 0; i < score.length; i++) {
    cakes[i] = 1;

    if (score[i] > score[i + 1]) {
      cakes[i]++;

      for (let j = i - 1; j < i; j++) {
        if (score[j] > score[j + 1]) {
          cakes[j]++;
        }
      }
    }
  }
}

2 1 