/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let maxL, minL;

    let len1 = 0, len2 = 0;

    let tempL1 = l1, tempL2 = l2;
    while (tempL1) {
        len1++;
        tempL1 = tempL1.next;
    }

    while (tempL2) {
        len2++;
        tempL2 = tempL2.next;
    }

    if (len1 > len2) {
        maxL = l1;
        minL = l2;
    } else {
        maxL = l2;
        minL = l1;
    }

    let tempMaxL = maxL, tempMinL = minL;

    while (tempMinL) {
        tempMaxL.val = tempMaxL.val + tempMinL.val;
        tempMinL = tempMinL.next;
        tempMaxL = tempMaxL.next;
    }

    tempMaxL = maxL;

    let carry = 0;

    let lastNode;

    while (tempMaxL) {
        tempMaxL.val = tempMaxL.val + carry;
        if (tempMaxL.val >= 10) {
            tempMaxL.val = tempMaxL.val - 10;
            carry = 1;
        } else {
            carry = 0;
        }
        lastNode = tempMaxL;
        tempMaxL = tempMaxL.next;
    }

    if (carry > 0) {
        lastNode.next = new ListNode(1);
    }

    return maxL;
};