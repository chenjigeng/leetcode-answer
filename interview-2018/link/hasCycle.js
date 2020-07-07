/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function(head) {
//   if (!head) return false;
//   const set = new Set();
//   while (head) {
//     if (set.has(head)) return true;
//     set.add(head);
//     head = head.next;
//   }

//   return false;
// };

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  let slow = head, fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
      if (slow === fast) return true;
    }
  }

  return false;
};