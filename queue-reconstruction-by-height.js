/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((A, B) => B[0] - A[0]);
  const results = [];

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    const rank = person[1];
    results.splice(rank, 0, person);
  }

  return results;
};

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));