/**
 * @param {number[]} time
 * @param {number} m
 * @return {number}
 */
var minTime = function(time, m) {
  let left = 0, right = time.reduce((a, b ) => a + b, 0);

  const check = (current) => {
    let count = 0;
    for (let i = 0; i < time.length;) {
      let acu = 0, max = 0, hasDelete = false;
      while (acu < current || !hasDelete) {
        if (i >= time.length) {
          break;
        }
        max = Math.max(max, time[i]);
        if (acu + time[i] > current) {
          if (!hasDelete) {
            acu += time[i];
            acu -= max;
            hasDelete = true;
          } else {
            break;
          }
        } else {
          acu += time[i];
        }

        i++;
      }

      count++;
    }

    return count <= m;
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  // console.log(left, right);
  return right;
};

// minTime([1,2,3,3], 2)
// minTime([999, 999, 999], 4)
// minTime([1,2,3], 1)