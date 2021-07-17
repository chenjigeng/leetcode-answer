/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next;

    if (!fast) {
      return false;
    }
    fast = fast.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};
