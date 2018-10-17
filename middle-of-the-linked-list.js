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
 * https://leetcode-cn.com/contest/weekly-contest-95/problems/middle-of-the-linked-list/
 * 链表的中间结点
 */
var middleNode = function(head) {
	// 使用一个快指针和一个慢指针。快指针每次跳两格，慢指针每次跳一格。
	let point = head, fastPoint = head;
	while (true) {
		if (fastPoint.next === null) {
			return point;
		}
		if (fastPoint.next.next === null) {
			return point.next;
		}
		point = point.next;
		fastPoint = fastPoint.next.next;
	}
};