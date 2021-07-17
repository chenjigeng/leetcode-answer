/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
   if (nums.length < 2) return 0;
  let max = Math.max(...nums);
  let exp = 1;

  while (exp / 10 < max) {
    const map = []

    for (let i = 0; i < nums.length; i++) {
      let cur = Math.floor(nums[i] / exp) % 10;

      if (!map[cur]) {
        map[cur] = []
      }

      map[cur].push(nums[i]);
    }

    newNums = [];

    for (let i = 0; i <= 9; i++) {
      if (map[i]) {
        newNums.push(...map[i])
      }
    }

    exp *= 10

    nums = newNums
  }

  let gap = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    gap = Math.max(gap, nums[i + 1] - nums[i]);
  }

  return gap;
};

// maximumGap([3,6,9,1])
// maximumGap([494767408,862126209,213511142,768240025,631263193,839199222,990848796,214568815,540853864,760724418,980162605,976743981,168965760,680875496,256709197,970953816,948680062,347254784,732201399,786249847,782805044,40906641,674241381,784330934,175502610,731105392,424650824,549764101,986090032,710542549,249208107,448419816,527708664,158499246,223421723,114552457,466978424,821491411,19614107,115389497,902211438,2644108,744489871,897895073,372311214,551142753,933294894,426217662,217504874,983488406,516890023,426853110,971124103])