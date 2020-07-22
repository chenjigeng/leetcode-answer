/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dump = {
        next: head,
    }
    let node = dump;
    let count = 0;
    let cur = head;

    while (count < n) {
        cur = cur.next;
        count++;
    }

    while (cur) {
        cur = cur.next;
        node = node.next;
    }

    if (node.next) {
        node.next = node.next.next;
    }

    // console.log(dump);

    return dump.next;
};

// removeNthFromEnd({
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5,
//                     next: null
//                 }
//             }
//         }
//     },
// }, 2)


// removeNthFromEnd({
//     val: 1,
//     next: null,
// }, 1)