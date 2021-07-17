/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) return true;

    const findMid = (node) => {
        let slow = node,
            fast = node;

        while (fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    };

    const reverse = (node) => {
        let prev = null,
            cur = node;
        while (cur) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        return prev;
    };

    const mid = findMid(head);
    let r = reverse(mid.next);

    while (head && r) {
        if (head.val !== r.val) {
            return false;
        }
        head = head.next;
        r = r.next;
    }

    return true;
};
