function accum(s) {
  // your code
  return [...s].map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'))