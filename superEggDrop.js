/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  const dp = [];
  for (let i = 0; i <= K; i++) {
    dp[i] = [0];
  }

  for (let s = 0; s <= N; s++) {
    dp[1][s] = s;
  }


  for (let step = 1; step <= N; step++) {
    dp[0][step] = 0
    for (let k = 1; k <= K; k++) {
      dp[k][step] = dp[k-1][step - 1] + dp[k][step-1] + 1;

      if (dp[k][step] >= N) {
        return step;
      }
    }
  }

};

// console.log(superEggDrop(2, 1));

// console.log(superEggDrop(2, 2))
// console.log(superEggDrop(2, 3))

// // console.log(superEggDrop(1, 1));
// console.log(superEggDrop(1, 3));
// console.log(superEggDrop(1, 2))
// console.log(superEggDrop(2, 6))
// console.log(superEggDrop(3, 14))

// console.log(superEggDrop(2, 4));