/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const mins = [...ratings].sort((a, b) => a - b);

  const candys = [];

  while (mins.length) {
    const min = mins[0];

    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i] === min) {
        let r = 1;
        if (
          i - 1 >= 0 &&
          candys[i - 1] !== undefined &&
          ratings[i - 1] < ratings[i]
        ) {
          r = Math.max(candys[i - 1] + 1, r);
        }

        if (
          i + 1 < ratings.length &&
          candys[i + 1] !== undefined &&
          ratings[i] > ratings[i + 1]
        ) {
          r = Math.max(candys[i + 1] + 1, r);
        }

        candys[i] = r;
      }
    }

    while (mins[0] === min) {
      mins.shift();
    }
  }

  return candys.reduce((a, b) => a + b, 0);
};

// console.log(candy([1, 0, 2]));
// console.log(candy([1, 0, 2]));
// console.log(candy([1, 3, 4, 5, 2]));
