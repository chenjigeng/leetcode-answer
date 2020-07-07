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
var sortList = function(head) {
  const arr = [];
  const links = [];
  while (head) {
    links.push(head);
    arr.push(head.val);
    head = head.next;
  }

  arr.sort((a, b) => a - b);
  arr.map((item, index) => links[index].val = item);

  return links[0];
};