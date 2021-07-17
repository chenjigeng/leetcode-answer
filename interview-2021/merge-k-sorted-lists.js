/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return undefined;
  if (lists.length === 1) return lists[0];
  let newLists = [];
  for (let i = 0; i < lists.length / 2; i++) {
    newLists.push(mergeTwoLists(lists[i * 2], lists[i * 2 + 1]));
  }

  return mergeKLists(newLists);
};

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
function mergeTwoLists(l1, l2) {
  let dumpy = {
    next: null,
  };

  let l = dumpy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      l.next = l1;
      l1 = l1.next;
    } else {
      l.next = l2;
      l2 = l2.next;
    }

    l = l.next;
  }

  if (l1) {
    l.next = l1;
  } else {
    l.next = l2;
  }

  return dumpy.next;
}
