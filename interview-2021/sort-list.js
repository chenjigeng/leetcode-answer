/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  return mergeSort(head);
};

function mergeSort(head) {
  if (!head) return null;
  if (!head.next) return head;
  let [left, right] = splitLink(head);

  (left = mergeSort(left)), (right = mergeSort(right));

  let dummp = {
    next: null,
  };

  let cur = dummp;

  while (left && right) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }

  if (!left) {
    cur.next = right;
  } else {
    cur.next = left;
  }

  return dummp.next;
}

function splitLink(head) {
  let slow = head,
    fast = head;
  let prev = slow;

  while (slow && fast) {
    prev = slow;
    slow = slow.next;
    fast = fast.next;

    if (fast) {
      fast = fast.next;
    }
  }

  const left = head,
    right = slow;

  prev.next = null;

  return [left, right];
}

// sortList({
//   val: 4,
//   next: {
//     val: 2,
//     next: {
//       val: 1,
//       next: {
//         val: 3,
//       },
//     },
//   },
// });
