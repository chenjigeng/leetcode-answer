/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // 入度
  const degrees = [];
  const map = {};

  for (let i = 0; i < numCourses; i++) {
    degrees[i] = 0;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [entry, exist] = prerequisites[i];

    if (!map[entry]) {
      map[entry] = [];
    }

    map[entry].push(exist);

    degrees[exist]++;
  }

  const stack = [];

  for (let i = 0; i < numCourses; i++) {
    if (degrees[i] === 0) {
      stack.push(i);
    }
  }

  while (stack.length > 0) {
    const top = stack.pop();

    if (!map[top]) continue;

    map[top].map((item) => {
      degrees[item]--;

      if (degrees[item] === 0) {
        stack.push(item);
      }
    });
  }

  for (let i = 0; i < numCourses; i++) {
    if (degrees[i] !== 0) return false;
  }

  return true;
};
