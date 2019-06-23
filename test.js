// 上下左右
const PosTransfers = [[-1, 0], [1, 0], [0, -1], [0, 1]]
const cache = [];

function dp(nums, row, col) {
  if (cache[row] && cache[row][col]) return cache[row][col];
  const cur = nums[row][col];
  let max = 1;
  PosTransfers.forEach(trans => {
    const newRow = trans[0] + row, newCol = trans[1] + col;
    if (newRow < 0 || newCol < 0 || newRow >= nums.length || newCol >= nums[row].length) {
      return;
    }
    const newVal = nums[newRow][newCol];
    if (newVal > cur) {
      const _best = cache[newRow] && cache[newRow][newCol] ? cache[newRow][newCol] : dp(nums, newRow, newCol);
      max = max > _best + 1 ? max : _best + 1;
    }
  })
  cache[row] = cachew[row] ? cache[row] : [];
  cache[row][col] = max;
  return max;
}

function getBest(nums) {
  // 先不做错误处理了
  const results = [];
  for (let r = 0; r < nums.length; r++) {
    for (let c = 0; c < nums[r].length; c++) {
      dp(nums, r, c);
    }
  }
  console.log(cache);
}

getBest(
  [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
  ]
)