function multiply(...oldArgs) {
  let cur = oldArgs.reduce((a, b) => a * b, 1);
  const newFun = (...args) => {
    cur = args.reduce((a, b) => a * b, cur);

    newFun.result = cur;

    return newFun;
  };
  newFun.result = cur;
  return newFun;
}

console.log(multiply(1, 2).result == 2);
console.log(multiply(1, 2)(3).result == 6);
console.log(multiply(1, 2)(3, 4).result == 24);
console.log(multiply(1, 2)(3, 4)(5).result == 120);
