/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 迭代版本
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null, cur = head;
  while (cur != null) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
  }
  
  return prev;
};

/** 递归版本
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) {
      return head;
  }
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};