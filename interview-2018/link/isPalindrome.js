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
var isPalindrome = function(head) {
  let slow = head, fast = head;
  while (fast !== null) {
    if (fast.next === null) {
      slow = slow.next;
      break;
    }
    slow = slow.next;
    fast = fast.next;
    if (fast) fast = fast.next;
  }

  reverseList(slow);

  while (head !== null && slow !== null) {
    if (head.val !== slow.val) return false;
    head = head.next;
    slow = slow.next;
  }

  return true;
};

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
var reverseList = function(head) {
  let prev = null, cur = head, next;

  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};