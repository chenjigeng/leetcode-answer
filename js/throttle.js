function throttle(fn, ms) {
  let tid;

  return function (...args) {
    if (tid) {
      clearTimeout(tid);
    }

    tid = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
}
