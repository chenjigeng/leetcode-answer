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
  let acu = 0;

  let result = l1;
  let beforeL1;

  while (l1 && l2) {
    let cur = l1.val + l2.val + acu;
    if (cur >= 10) {
      cur -= 10;
      acu = 1;
    } else {
      acu = 0;
    }

    l1.val = cur;
    beforeL1 = l1;
    l1 = l1.next;
    l2 = l2.next;
  }

  if (l2) {
    beforeL1.next = l2;
    l1 = l2;
  }

  if (acu) {
    while (l1 && acu) {
      let cur = l1.val + acu;

      if (cur >= 10) {
        cur -= 10;
        acu = 1;
      } else {
        acu = 0;
      }

      l1.val = cur;
      beforeL1 = l1;
      l1 = l1.next;
    }

    if (acu) {
      beforeL1.next = {
        val: 1,
        next: null,
      };
    }
  }

  return result;
};

// (l1 = [2, 4]), (l2 = [5, 6, 4]);
// l1 = {
//   val: 9,
//   next: {
//     val: 9,
//     next: {
//       val: 9,
//       next: {
//         val: 9,
//       },
//     },
//   },
// };

// l2 = {
//   val: 9,
//   next: {
//     val: 9,
//     next: {
//       val: 9,
//       next: {
//         val: 9,
//         next: {
//           val: 9,
//         },
//       },
//     },
//   },
// };

// addTwoNumbers(l1, l2);
