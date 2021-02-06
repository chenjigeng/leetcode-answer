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
  if (lists.length === 0) {
    return null;
  }
  var mergeTwoLists = function (l1, l2) {
    const dummyNode = {
      next: null,
    };

    let cur = dummyNode;

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }

      cur = cur.next;
    }

    if (!l1) {
      cur.next = l2;
    } else {
      cur.next = l1;
    }

    return dummyNode.next;
  };

  while (lists.length > 1) {
    const newList = [];
    for (let i = 0; i < lists.length; i += 2) {
      if (i + 1 === lists.length) {
        newList.push(lists[i]);
      } else {
        newList.push(mergeTwoLists(lists[i], lists[i + 1]));
      }
    }

    lists = newList;
  }

  return lists[0];
};
