/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let damdNode = {
        next: head,
    };
    let tryNode = damdNode,
        prev = damdNode;

    while (n) {
        tryNode = tryNode.next;
        n--;
    }

    while (tryNode && tryNode.next) {
        tryNode = tryNode.next;
        prev = prev.next;
    }

    if (prev.next) {
        prev.next = prev.next.next;
    }

    return damdNode.next;
};
