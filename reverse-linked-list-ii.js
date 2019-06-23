/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 1 -> 2 -> 3 -> 4 -> 5
 * 1 -> 3 -> 2 -> 4 -> 5
 * 1 -> 4 -> 3 -> 2 -> 5
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  const dumpy = {
    next: head,
  };
  let prev = dumpy;
  for (let i = 0; i < m - 1; i++) {
    prev = prev.next;
  }

  let cur = prev.next;

  for (let i = m; i < n; i++) {
    const tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = prev.next;
    prev.next = tmp;
  }

  return dumpy.next;
};

// reverseBetween({
//   val: 1,
//   next: {
//     val: 2,
//     next: { 
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: null,
//         }
//       }
//     }
//   }
// }, 2, 4)
console.log(reverseBetween({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    },
  }
}, 1, 2))