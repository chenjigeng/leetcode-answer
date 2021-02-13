/**
 *
 * @param {number} val
 * @param {LinkNode} next
 * @param {LinkNode} prev
 */
function LinkNode(key, val, next, prev) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    /**
     * @type {{[key: string]: LinkNode}}
     */
    this.map = {};
    this.head = new LinkNode();
    this.tail = new LinkNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
    this.size = 0;
};

/**
 *
 * @param {LinkNode} node
 */
LRUCache.prototype.insertNode = function (node) {
    if (this.size < this.capacity) {
        this.size++;
    } else {
        delete this.map[this.tail.prev.key];
        this.tail.prev = this.tail.prev.prev;
        this.tail.prev.next = this.tail;
    }

    node.next = this.head.next;
    this.head.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
};

/**
 *
 * @param {LinkNode} node
 */
LRUCache.prototype.moveHead = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = this.head.next;
    node.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map[key] !== undefined) {
        const node = this.map[key];
        this.moveHead(node);
        return node.val;
    }

    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map[key] === undefined) {
        const node = new LinkNode(key, value, null, null);
        this.map[key] = node;
        this.insertNode(node);
    } else {
        this.map[key].val = value;
        this.moveHead(this.map[key]);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1); // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2); // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1); // 返回 -1 (未找到)
// lRUCache.get(3); // 返回 3
// lRUCache.get(4); // 返回 4
