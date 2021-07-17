function debounce(fn, ms) {
  let tid;

  return function (...args) {
    if (tid) {
      return;
    }

    tid = setTimeout(() => {
      fn.apply(this, args);
      tid = 0;
    }, ms);
  };
}
