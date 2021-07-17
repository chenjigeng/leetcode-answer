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
var hasCycle = function (head) {
    if (!head) return false;
    let fast = head.next,
        slow = head;
    while (fast && slow) {
        if (fast === slow) return false;
        fast = fast.next;
        slow = slow.next;

        if (fast) {
            fast = fast.next;
        } else {
            return false;
        }
    }

    return false;
};
