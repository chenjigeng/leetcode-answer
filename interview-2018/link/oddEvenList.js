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
var oddEvenList = function(head) {
  let even = head.next;
  let odd = head;
  let dump = {};
  dump.next = even;

  while (even && even.next) {
    odd = odd.next = even.next;
    even = even.next = odd.next;
  }

  odd.next = dump.next;

  return head;
};