/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = {};

    for (let i = 0; i < tasks.length; i++) {
        if(!map[tasks[i]]) {
            map[tasks[i]] = 0;
        }

        map[tasks[i]]++;
    }

    const queues = [];

    for (let key in map) {
        queues.push({
            key,
            num: map[key],
        })
    }

    queues.sort((a, b) => b.num - a.num);

    let timeout = 0;

    while (queues.length) {
        let cur = 0;
    
        for (let i = 0; i <= n && i < queues.length; i++) {
            const task = queues[i];
            task.num--;
            timeout++;
            cur++;
        }


        for (let i = 0; i < queues.length;) {
            if (queues[i].num === 0) {
                queues.splice(i, 1);
            } else {
                i++
            }
        }

        if (queues.length > 0) {
            timeout += (n + 1) - cur;
        }

        queues.sort((a, b) => b.num - a.num);

    }

    // console.log(timeout);

    return timeout
};

// leastInterval(["A","A","A","B","B","B"], 2)

// leastInterval(["A","A","A","B","B","B", "C","C","C", "D", "D", "E"],2)