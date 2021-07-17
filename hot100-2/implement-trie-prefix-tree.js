function TireNode(key, end) {
    this.key = key;
    this.end = end;
    this.nodes = {};
}

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.node = new TireNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.node;
    for (let i = 0; i < word.length; i++) {
        const chat = word[i];

        if (!node.nodes[chat]) {
            node.nodes[chat] = new TireNode(chat, word.length === i + 1);
        }
        node = node.nodes[chat];
    }

    node.end = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.node;
    for (let i = 0; i < word.length; i++) {
        const chat = word[i];

        if (!node.nodes[chat]) {
            return false;
        } else {
            node = node.nodes[chat];
        }
    }

    return node.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.node;
    for (let i = 0; i < prefix.length; i++) {
        const chat = prefix[i];

        if (!node.nodes[chat]) {
            return false;
        } else {
            node = node.nodes[chat];
        }
    }

    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// trie = new Trie();

// trie.insert("apple");
// trie.search("apple"); // 返回 true
// trie.search("app"); // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");
// trie.search("app"); // 返回 true
