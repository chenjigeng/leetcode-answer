/**
 *
 * @param {{startTime, endTime}[]} arr
 */
function minCourse(arr) {
  let count = 0;

  while (arr.length) {
    count++;
    let top = arr.shift();

    while (arr.length > 0 && arr.find((item) => item.startTime > top.endTime)) {
      top = arr.splice(
        arr.indexOf(arr.find((item) => item.startTime > top.endTime)),
        1
      )[0];
    }
  }
  console.log(count);

  return count;
}

minCourse([
  {
    startTime: 0,
    endTime: 4,
  },
  {
    startTime: 1,
    endTime: 3,
  },
  {
    startTime: 2,
    endTime: 8,
  },
]);

minCourse([
  {
    startTime: 0,
    endTime: 3,
  },
  {
    startTime: 1,
    endTime: 2,
  },
  {
    startTime: 5,
    endTime: 8,
  },
]);
minCourse([
  {
    startTime: 0,
    endTime: 3,
  },
  {
    startTime: 4,
    endTime: 5,
  },
  {
    startTime: 6,
    endTime: 8,
  },
]);
