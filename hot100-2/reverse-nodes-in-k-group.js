/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  return splitK(head, k);
};

// reverseKGroup(
//   {
//     val: 1,
//     next: {
//       val: 2,
//       next: {
//         val: 3,
//         next: {
//           val: 4,
//           next: {
//             val: 5,
//           },
//         },
//       },
//     },
//   },
//   2
// );

function splitK(head, k) {
  let index = 0,
    tail = head;

  for (; index < k - 1; index++) {
    if (tail) {
      tail = tail.next;
    } else {
      return head;
    }
  }

  if (!tail) return head;

  const next = tail.next;

  tail.next = null;

  let nextHead = reverse(head);

  head.next = splitK(next, k);

  return nextHead;
}

function reverse(head) {
  let prev = null,
    cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}
