function bitset(nums, num) {
  const length = 32 * 100000 / 32;
  const arr = Array.from({ length }).map(() => 0);
  for (let i = 0; i < nums.length; i++) {
    const slotNum = Math.floor(nums[i] / 32);
    const bitIndex = nums[i] % 32;
    arr[slotNum] = arr[slotNum] ^ (1 << bitIndex);
  }

  const slotNum = Math.floor(num / 32);
  const bitIndex = num % 32;
  if ((arr[slotNum] & (1 << bitIndex)) > 0) return true;

  return false;
}

console.log(bitset([1,2,3, 123, 456, 123, 4564, 5675, 456,234234 ,234234,1231, 565,45123123,234234234,2342342], 451231231));