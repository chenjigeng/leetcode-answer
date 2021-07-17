/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  console.log(people);

  const result = [];
  for (let i = 0; i < people.length; i++) {
    result[i] = undefined;
  }

  for (let i = 0; i < people.length; i++) {
    const [height, size] = people[i];

    let largeThan = 0;

    for (let j = 0; j < result.length; j++) {
      if (largeThan === size) {
        while (result[j]) {
          j++;
        }

        result[j] = people[i];
        break;
      } else {
        if (result[j] === undefined || result[j][0] >= height) {
          largeThan++;
        }

        if (largeThan === size) {
          while (result[j]) {
            j++;
          }

          result[j] = people[i];
          break;
        }
      }
    }
  }

  // console.log(result);
  return result;
};

// people = [
//   [7, 0],
//   [4, 4],
//   [7, 1],
//   [5, 0],
//   [6, 1],
//   [5, 2],
// ];

// reconstructQueue(people);
