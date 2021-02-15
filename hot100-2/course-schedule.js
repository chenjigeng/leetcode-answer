/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const degrees = [];
    for (let i = 0; i < numCourses; i++) {
        degrees[i] = 0;
    }

    const map = {};

    prerequisites.map((item) => {
        const [entry, exist] = item;

        if (!map[entry]) {
            map[entry] = [];
        }

        map[entry].push(exist);
        degrees[exist]++;
    });

    const roots = [];

    for (let i = 0; i < degrees.length; i++) {
        if (degrees[i] === 0) {
            roots.push(i);
        }
    }

    while (roots.length) {
        const top = roots.pop();

        if (map[top]) {
            map[top].map((item) => {
                degrees[item]--;

                if (degrees[item] === 0) {
                    roots.push(item);
                }
            });
            map[top] = undefined;
        }
    }

    return degrees.every((item) => item === 0);
};
