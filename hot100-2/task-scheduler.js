/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const map = {};

  const queue = [];

  for (let i = 0; i < tasks.length; i++) {
    if (!map[tasks[i]]) {
      map[tasks[i]] = 0;
    }

    map[tasks[i]]++;
  }

  for (let key in map) {
    const item = map[key];
    queue.push({
      key,
      num: item,
    });
  }

  queue.sort((a, b) => b.num - a.num);

  let count = 0;

  while (queue.length) {
    let index = 0;
    for (let i = 0; i <= n; i++) {
      if (queue.length === 0) break;
      count++;
      if (index >= queue.length) continue;
      const top = queue[index];
      top.num--;
      if (top.num === 0) {
        queue.splice(index, 1);
      } else {
        index++;
      }
    }
    queue.sort((a, b) => b.num - a.num);
  }

  // console.log(count);
  return count;
};

// (tasks = ["A", "A", "A", "B", "B", "B"]), (n = 2);
// (tasks = ["A", "A", "A", "B", "B", "B"]), (n = 0);
// (tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"]), (n = 2);
// leastInterval(tasks, n);
