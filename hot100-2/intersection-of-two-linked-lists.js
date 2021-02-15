/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let initA = headA,
        initB = headB;
    while (headA && headB) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;

        if (!headA && initB) {
            headA = initB;
            initB = null;
        }

        if (!headB && initA) {
            headB = initA;
            initA = null;
        }
    }

    return null;
};
