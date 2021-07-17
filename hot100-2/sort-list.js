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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function mergeSort(head) {
    if (!head) return null;
    if (!head.next) {
        return head;
    }

    let right = mergeSort(split(head));

    let left = mergeSort(head);

    let dump = {
        next: null,
    };

    let cur = dump;

    while (right && left) {
        if (right.val < left.val) {
            cur.next = right;
            right = right.next;
        } else {
            cur.next = left;
            left = left.next;
        }
        cur = cur.next;
    }

    if (right) {
        cur.next = right;
    } else {
        cur.next = left;
    }

    return dump.next;
}

function split(head) {
    let slow = head,
        fast = head;
    let dump = {
        next: head,
    };

    let prev = dump;

    while (fast) {
        if (fast.next) {
            fast = fast.next.next;
        } else {
            prev.next = null;
            return slow;
        }
        slow = slow.next;
        prev = prev.next;
    }

    prev.next = null;

    return slow;
}

// const list = {
//     val: -1,
//     next: {
//         val: 5,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 0,
//                 },
//             },
//         },
//     },
// };

// console.log(sortList(list));
