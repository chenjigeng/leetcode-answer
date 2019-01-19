function compose(...fns) {
  return function(...args) {
    return fns.reduce((lastResult, fn) => {
      console.log(fn)
      return fn(lastResult);
    }, args);
  }
}

function A(name) {
  return name + 'A';
}

function B(name) {
  return name + 'B';
}

console.log(compose(A, B)('cjg'));