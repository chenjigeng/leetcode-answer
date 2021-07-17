/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  const bullets = [];

  for (let i = 1; i <= n; i++) {
    bullets[i - 1] = false;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        bullets[i - 1] = !bullets[i - 1];
      }
    }
  }

  // console.log('bullets', bullets);

  return bullets.filter((item) => !!item).length;
};

// console.log(bulbSwitch(30000));
