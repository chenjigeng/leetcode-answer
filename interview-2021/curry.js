function curry(fn, ...args) {
  function wrapperFunction(...newArgs) {
    args.push(...newArgs);
    console.log(args, fn, fn.length);

    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return curry(fn, ...args);
    }
  }

  return wrapperFunction;
}

function add(x, y, z) {
  return x + y + z;
}

const newAdd = curry(add);
