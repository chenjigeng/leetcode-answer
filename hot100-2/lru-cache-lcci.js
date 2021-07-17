/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.limit = capacity;
  this.count = 0;
  this.map = {};
  this.dummpHead = {
    next: null,
    prev: null,
  };

  this.dummpTail = {
    prev: this.dummpHead,
    next: null,
  };
  this.dummpHead.next = this.dummpTail;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map[key]) {
    return -1;
  }

  const cur = this.map[key];

  cur.prev.next = cur.next;
  cur.next.prev = cur.prev;

  cur.next = this.dummpHead.next;
  cur.prev = this.dummpHead;
  this.dummpHead.next.prev = cur;
  this.dummpHead.next = cur;

  return cur.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 更新操作

  if (this.map[key]) {
    const cur = this.map[key];
    cur.value = value;

    cur.prev.next = cur.next;
    cur.next.prev = cur.prev;

    cur.next = this.dummpHead.next;
    cur.prev = this.dummpHead;
    this.dummpHead.next.prev = cur;
    this.dummpHead.next = cur;

    return;
  }

  if (this.count >= this.limit) {
    const deleteNode = this.dummpTail.prev;
    deleteNode.prev.next = this.dummpTail;
    this.dummpTail.prev = deleteNode.prev;
    this.map[deleteNode.key] = undefined;
  } else {
    this.count++;
  }

  const newNode = {
    key,
    value,
    prev: this.dummpHead,
    next: this.dummpHead.next,
  };

  this.dummpHead.next.prev = newNode;
  this.dummpHead.next = newNode;

  this.map[key] = newNode;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
