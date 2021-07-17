/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let acu = 0;
  let dummy = {
    next: l1,
  };

  let prev;

  while (l1 && l2) {
    l1.val = l1.val + l2.val + acu;
    prev = l1;

    if (l1.val >= 10) {
      l1.val -= 10;
      acu = 1;
    } else {
      acu = 0;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  if (!l1) {
    prev.next = l2;
  }

  if (acu) {
    while (prev.next && acu) {
      prev.next.val = prev.next.val + acu;

      if (prev.next.val >= 10) {
        prev.next.val -= 10;
        acu = 1;
      } else {
        acu = 0;
      }

      prev = prev.next;
    }

    if (acu) {
      prev.next = {
        val: 1,
        next: null,
      };
    }
  }

  return dummy.next;
};
