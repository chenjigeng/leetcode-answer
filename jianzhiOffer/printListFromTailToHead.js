/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 递归
// function printListFromTailToHead(head) {
// 	const list = [];
// 	perform(head, list);
// 	return list;
//     // write code here
// }

// function perform(head, list) {
// 	if (head !== null) {
// 		perform(head.next, list);
// 		list.push(head.val);
// 	}
// }

// 使用栈(先进后出)
function printListFromTailToHead(head) {
	const list = [];
	while (head !== null) {
		list.push(head.val);
		head = head.next;
	}

	const newList = [];
	while (list.length) {
		newList.push(list.pop());
	}

	return newList;
    // write code here
}