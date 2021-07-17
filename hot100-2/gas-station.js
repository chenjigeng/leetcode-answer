/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let res = []

  for (let i = 0; i < gas.length; i++) {
    res[i] = gas[i] - cost[i];
  }

  for (let i = 0; i < gas.length; i++) {
    let cur = 0, j = i;

    while (cur + res[j] >= 0) {
      cur += res[j];
      j = (j + 1) % gas.length;

      if (j === i) {
        return i;
      }
    }

    if (j < i) {
      return -1;
    }

    i = j
  }

  return -1;
};

// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]

gas  = [4]
cost = [5]
console.log(canCompleteCircuit(gas, cost))