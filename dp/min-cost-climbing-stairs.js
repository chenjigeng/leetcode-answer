/**
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dps = [0, cost[0], cost[1]];
  cost.push(0);
  for (let i = 2; i < cost.length; i++) {
    dps[i + 1] = Math.min(dps[i - 1], dps[i]) + cost[i];
  }

  return dps[cost.length];
};

// console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
// console.log(minCostClimbingStairs([10, 15, 20]));