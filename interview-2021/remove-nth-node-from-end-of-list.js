/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = {
    next: head,
  };

  let prev = dummy,
    cur = head;

  let length = 0;
  let t = head;

  while (t) {
    t = t.next;
    length++;
  }

  for (let i = 0; i < length - n; i++) {
    prev = cur;
    cur = cur.next;
  }

  prev.next = prev.next.next;

  return dummy.next;
};
