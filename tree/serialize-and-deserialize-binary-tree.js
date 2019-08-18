/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let str = '';
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) {
      str += 'null,';
      continue;
    }
    str += node.val + ',';
    queue.push(node.left);
    queue.push(node.right);
  }

  return str.slice(0, str.length - 1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  data = data.split(',');
    let val = data.shift();
    if (val === 'null') return null;
  const root = {
    val,
    left: null,
      right: null,
  };
  const queue = [root];

  while (queue.length > 0 && data.length > 0) {
    const node = queue.shift();
    const val = data.shift();
    if (val === 'null') {
    } else {
      node.left = {
        val,
          left: null,
          right: null,
      }
    }

    const val1 = data.shift();
    if (val1 === 'null') {
    } else {
      node.right = {
        val: val1,
          left: null,
          right: null,
      }
    }
    val !== 'null' && queue.push(node.left);
    val1 !== 'null' && queue.push(node.right);
  }

  // console.log('root', root);
  return root;
};



/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

//  console.log(serialize({
//    val: 1,
//    left: {
//      val: 2,
//      left: {
//        val: 3
//      },
//      right: {
//        val: 4,
//      }
//    },
//    right: {
//      val: 5
//    }
//  }));

//  console.log(deserialize(serialize({
//   val: 1,
//   left: {
//     val: 2,
//   },
//   right: {
//     val: 3,
//     left: {
//       val: 4
//     },
//     right: {
//       val: 5,
//     }
//   }
//  })));

