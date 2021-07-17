function findRoot(k) {
  let i = 1;
  for (let j = 0; j < k; j++) {
    i += Math.pow(2, j);
  }

  return i / 2;
}

function FindMinRoot(k, a, b, c) {
  const maxA = Math.max(a, b, c),
    minA = Math.min(a, b, c);

  let root = findRoot(k--);

  while (root > maxA || root < minA) {
    if (root > maxA) {
      root -= findRoot(k--);
    }

    if (root < minA) {
      root += findRoot(k--);
    }
  }

  return root;
}

console.log(FindMinRoot(4, 10, 15, 13));
