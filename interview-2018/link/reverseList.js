/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, prev) {
  if (!head) return null;
  const next = head.next;
  head.next = prev;
  if (next === null) {
    return head;
  }

  return reverseList(next, head);
};