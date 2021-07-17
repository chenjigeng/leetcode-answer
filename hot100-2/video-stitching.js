/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
 var videoStitching = function(clips, time) {
  clips.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];

    return b[1] - a[1]
  })

  const stack = []

  const items = clips.filter(item => item[0] === 0);

  clips = clips.filter(item => item[0] !== 0);

  items.map(item => {
    stack.push({
      len: 1,
      node: item,
      used: [],
    })
  })

  let used = []

  for (let i = 0; i < clips.length; i++) {
    used[i] = false;
  }

  let min = Number.MAX_VALUE;

  while (stack.length) {
    console.log(stack);
    const top = stack.pop();

    const { len, node } = top;

    if (node[1] >= time) {
      min = Math.min(min, len);
      continue;
      // return len
    }

    let maxValue = 0;

    for (let i = clips.length - 1; i >= 0; i--) {
      if (clips[i][0] >= node[0] && clips[i][0] <= node[1] && clips[i][1] > node[1]) {
        maxValue = Math.max(maxValue, clips[i][1]);
      }
    }

    if (maxValue > 0) {
      stack.push({
        len: len + 1,
        node: [node[0], maxValue]
      })
    }

    // const filterClips = clips.filter(item => {
    //   return item[0] > node[0] && item[0] < node[1];
    // })

    // clips = clips.filter(item => {
    //   return !filterClips.includes(item);
    // })


    // filterClips.map(item => {
    //   stack.push({
    //     len: len + 1,
    //     node: [Math.min(item[0], node[0]), Math.max(item[1], node[1])]
    //   })
    // })
  }

  return min === Number.MAX_VALUE ? -1 : min;
};

// clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10
// clips = [[0,1],[1,2]], T = 5
// clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], T = 9


// console.log(videoStitching(clips, T))
// console.log(videoStitching([[0,5],[1,6],[2,7],[3,8],[4,9],[5,10],[6,11],[7,12],[8,13],[9,14],[10,15],[11,16],[12,17],[13,18],[14,19],[15,20],[16,21],[17,22],[18,23],[19,24],[20,25],[21,26],[22,27],[23,28],[24,29],[25,30],[26,31],[27,32],[28,33],[29,34],[30,35],[31,36],[32,37],[33,38],[34,39],[35,40],[36,41],[37,42],[38,43],[39,44],[40,45],[41,46],[42,47],[43,48],[44,49],[45,50],[46,51],[47,52],[48,53],[49,54]], 50));