/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const backTracking = (current, index) => {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = index; i < current.length; i++) {
      [current[i], current[index]] = [current[index], current[i]];
      backTracking([...current], index + 1);
      [current[i], current[index]] = [current[index], current[i]];
    }
  };

  backTracking([...nums], 0);

  // console.log(result);

  return result;
};

// permute([1, 2, 3]);
