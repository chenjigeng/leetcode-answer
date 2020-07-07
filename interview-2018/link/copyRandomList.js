/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
// var copyRandomList = function(head) {
//   function getNow(node) {
//     return map.filter(item => item.prev === node)[0];
//   }
//   const map = [];
//   let link = head, next, random;
//   let newHead = new Node(head.val);
//   let newLink = newHead;
//   while (link) {
//     next = link.next;
//     random = link.random;
//     if (random) {
//       let node;
//       if (getNow(random)) {
//         node = getNow(random).now;
//       } else {
//         node = new Node(random.val);
//         map.push([{
//           prev: random,
//           now: newNode,
//         }])
//       }
//       newLink.random = node;
//     }
//     if (next) {
//       let node;
//       if (getNow(next)) {
//         node = getNow(next).now;
//       } else {
//         node = new Node(next.val);
//         map.push([{
//           prev: next,
//           now: newNode,
//         }])
//       }
//       newLink.next = node;
//       newLink = node;
//     }
//     link = link.next;
//   }

//   return newHead;
// };
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const map = new Map();
  return copy(head, map);
};

/**
 *
 *
 * @param {Node} node
 * @param {Map} map
 * @returns
 */
function copy(node, map) {
  if (!node) return null;
  if (map.has(node)) return map.get(node);

  const newNode = new Node(node.val, null, null);
  newNode.next = copy(newNode.next, map);
  newNode.random = copy(newNode.random, map);

  map.set(node, newNode);

  return newNode;
}