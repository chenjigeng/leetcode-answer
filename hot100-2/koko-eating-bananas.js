/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let max = 0;

  for (let i = 0; i < piles.length; i++) {
    max = Math.max(max, piles[i]);
  }
  let left = 0, right = max

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    let count = piles.reduce((a, b) => a + (Math.ceil(b / mid)), 0);

    if (count > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right
};


// piles = [3,6,7,11], H = 8
// piles = [30,11,23,4,20], H = 5
// piles = [30,11,23,4,20], H = 6
// piles = [1000000000,1000000000], H = 3

// console.log(minEatingSpeed(piles, H))