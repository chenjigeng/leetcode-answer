function deepCopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  const result = {};

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  } else {
    for (let key in obj) {
      result[key] = deepCopy(obj[key]);
    }
  }

  return result;
}

const a = {
  name: 22,
  arr: [1, 2, 3],
};

const b = deepCopy(a);

console.log(a === b);
console.log(a.name === b.name);
console.log(a.arr === b.arr);
