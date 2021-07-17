/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const leftArr = [],
    rightArr = [];

  let index = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      index = i;
      leftArr[i] = 0;
    } else {
      leftArr[i] = index === -1 ? Number.MAX_VALUE : i - index;
    }
  }

  index = -1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) {
      index = i;
      rightArr[i] = 0;
    } else {
      leftArr[i] = index === -1 ? Number.MAX_VALUE : index - i;
    }
  }

  const result = [];

  for (let i = 0; i < s.length; i++) {
    result[i] = Math.min(leftArr[i], rightArr[i]);
  }

  return result;
};

function curry(fn, ...args) {
  const context = this;

  return function (...newArgs) {
    if (args.length + newArgs.length >= fn.length) {
      return fn.apply(context, ...args, ...newArgs);
    }

    return curry(fn, ...args, ...newArgs);
  };
}

function flatten(arr) {
  const result = [];
  arr.map((item) => {
    if (Array.isArray(item)) {
      return result.push(...flatten(item));
    }

    result.push(item);
  });

  return result;
}

console.log(
  flatten([
    1,
    2,
    3,
    4,
    [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
    5,
    "string",
    { name: "弹铁蛋同学" },
  ])
);

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

function throttle(fn, ms) {
  let tid;
  return function (...args) {
    if (tid) {
      return;
    }

    tid = setTimeout(() => {
      fn(...args);
    }, ms);
  };
}
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;

  for (let i = 2; i < n; i++) {
    for (let j = Math.sqrt(i); j > 1; j--) {
      if (i % j === 0) {
        count++;
        break;
      }
    }
  }

  return count;
};
