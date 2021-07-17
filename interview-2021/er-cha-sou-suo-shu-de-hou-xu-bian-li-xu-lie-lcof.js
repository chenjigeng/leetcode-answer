/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  if (postorder.length === 1 || postorder.length === 0) return true;

  const target = postorder[postorder.length - 1];

  const leftIndex = postorder.findIndex((item) => item > target);

  if (leftIndex === -1) {
    return verifyPostorder(postorder.slice(0, postorder.length - 1));
  }

  for (let i = leftIndex; i < postorder.length - 1; i++) {
    if (postorder[i] < target) return false;
  }

  return (
    verifyPostorder(postorder.slice(0, leftIndex)) &&
    verifyPostorder(postorder.slice(leftIndex, postorder.length - 1))
  );
};

// console.log(verifyPostorder([4, 6, 7, 5]));
// console.log(verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3]));
