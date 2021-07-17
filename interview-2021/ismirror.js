function ismirror(n) {
  const arr = [];

  while (n) {
    let t = n % 10;
    n = Math.floor(n / 10);

    arr.push(t);
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(ismirror(3));
console.log(ismirror(121));
console.log(ismirror(12321));
console.log(ismirror(45));
