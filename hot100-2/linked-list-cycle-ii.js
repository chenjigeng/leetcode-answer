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
var detectCycle = function (head) {
    let fast = head,
        slow = head;
    while (fast && slow) {
        if (!fast || !fast.next) {
            return null;
        }

        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            let ptr = head;

            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }

            return ptr;
        }
    }

    return null;
};
