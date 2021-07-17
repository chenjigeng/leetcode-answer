/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  const stack = [
    {
      node: root,
      visted: false,
    },
  ];
  let dump = {
    right: null,
  };

  // let last = null;

  let cur = dump;

  while (stack.length) {
    const top = stack.pop();

    if (!top.node) continue;

    if (top.visted) {
      cur.right = {
        val: top.node.val,
        left: cur === dump ? null : cur,
        right: null,
      };

      cur = cur.right;
    } else {
      stack.push({
        node: top.node.right,
        visted: false,
      });

      stack.push({
        node: top.node,
        visted: true,
      });

      stack.push({
        node: top.node.left,
        visted: false,
      });
    }
  }

  dump.right.left = cur;
  cur.right = dump.right;

  // console.log(JSON.stringify(dump));

  return dump.right;
};

// const root = {
//   val: 4,
//   left: {
//     val: 2,
//     left: {
//       val: 1,
//     },
//     right: {
//       val: 3,
//     },
//   },
//   right: {
//     val: 5,
//   },
// };

// treeToDoublyList(root);
