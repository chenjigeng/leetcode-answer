/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return merge(lists, 0, lists.length - 1);
};

const merge = (lists, left, right) => {
    if (left === right) return lists[left];
    const mid  = Math.floor((left + right) / 2);
    
    return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right));
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const dump = {
        next: null,
    };

    const node = dump;

    while (l1 && l2) {
        if (l1.val > l2.val) {
            node.next = l2;
            l2 = l2.next;
        }  else {
            node.next = l1;
            l1 = l1.next;
        }
        node = node.next;
    }

    if (l1) {
        node.next = l1;
    } else {
        node.next = l2;
    }

    return dump.next;
};