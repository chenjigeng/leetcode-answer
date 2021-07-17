function throttle(fn, ms) {
  let tid;

  return function (...args) {
    if (tid) {
      return;
    }

    tid = setTimeout(() => {
      fn(...args);
      tid = null;
    }, ms);
  };
}

function debounce(fn, ms) {
  let tid;

  return function (...args) {
    if (tid) {
      clearTimeout(tid);
    }

    tid = setTimeout(() => {
      fn(...args);
    }, ms);
  };
}
