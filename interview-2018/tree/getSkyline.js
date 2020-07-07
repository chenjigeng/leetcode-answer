/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
  const skylines = [];

  for (let i = 1; i < buildings.length; i++) {
    const building = buildings[i];
    const beforeBuilding = buildings[i - 1];
    if (beforeBuilding[2] !== building[2]) {
      skylines.push([beforeBuilding[0], beforeBuilding[2]]);

      if (beforeBuilding[1] < building[0]) {
        skylines.push([beforeBuilding[1], 0]);
      }
    } else {
      skylines.push([beforeBuilding[0], beforeBuilding[2]]);
    }
  }

  skylines.push([buildings[buildings.length - 1][1], 0]);

  console.log(skylines)

  return skylines;
};

getSkyline([[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]);