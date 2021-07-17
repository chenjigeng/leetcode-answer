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
var reverseList = function (head) {
    const helper = (link, prev) => {
        if (!link) return prev;
        const next = link.next;
        link.next = prev;
        prev = link;
        return helper(next, prev);
    };

    return helper(head, null);
};
