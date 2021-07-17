/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const map = {};

  let allTask = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (!map[tasks[i]]) {
      map[tasks[i]] = 0;
    }

    map[tasks[i]]++;
    allTask++;
  }

  let queues = [];

  for (let key in map) {
    queues.push(map[key]);
  }

  queues.sort((a, b) => b - a);

  let time = 0;

  while (queues.length) {
    for (let i = 0; i <= n; i++) {
      if (allTask === 0) {
        return time;
      }
      time++;
      if (!queues[i]) continue;
      if (queues[i] > 0) {
        queues[i]--;
        allTask--;
      }
    }

    queues = queues.filter((item) => item !== 0).sort((a, b) => b - a);
  }

  return time;
};
