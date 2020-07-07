/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head) return null;
    let tail = head;

    for (let i = 0; i < k - 1; i++) {
        if (!tail.next) {
            return head;
            // break;
        }
        tail = tail.next;
    }

    let nextHead = tail.next;
    tail.next = null;

    const resultHead = reverse(head);
    head.next = reverseKGroup(nextHead, k);


    return resultHead;
};


function reverse(head) {
    let pre = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
}

// const testCase = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5,
//                 }
//             }
//         }
//     }
// }

// console.log(reverseKGroup(testCase, 3));