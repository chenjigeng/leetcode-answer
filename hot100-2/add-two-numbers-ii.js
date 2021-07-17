/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  (l1 = reverse(l1)), (l2 = reverse(l2));

  let cur = l1;

  let acu = 0;
  let prev = null;

  while (l1 && l2) {
    prev = l1;
    l1.val = l1.val + l2.val + acu;

    if (l1.val >= 10) {
      l1.val -= 10;
      acu = 1;
    } else {
      acu = 0;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  console.log(l1, l2);

  if (!l1) {
    prev.next = l2;
  }

  if (!prev.next && acu) {
    prev.next = {
      val: 1,
      next: null,
    };

    return reverse(cur);
  }

  prev = prev.next;

  let p;

  while (prev && acu) {
    p = prev;
    prev.val = prev.val + acu;
    if (prev.val >= 10) {
      acu = 1;
      prev.val = prev.val - 10;
    } else {
      acu = 0;
    }
    prev = prev.next;
  }

  if (acu) {
    p.next = {
      val: 1,
      next: null,
    };
  }

  return reverse(cur);
};

function reverse(node) {
  if (!node) return null;

  let prev = null,
    cur = node;

  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

// addTwoNumbers(
//   {
//     val: 8,
//     next: {
//       val: 9,
//       next: {
//         val: 9,
//       },
//     },
//   },
//   {
//     val: 2,
//   }
// );
