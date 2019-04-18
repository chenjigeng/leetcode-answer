/**
 * Initialize your data structure here.
 */
var Trie = function() {
	this.root = new TrieNode();
};

function TrieNode() {
	this.nodes = {};
	this.count = 0;
	this.exist = false;
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
	let currentNode = this.root;
	for (let i = 0; i < word.length; i++) {
		if (currentNode.nodes[word[i]]) {
			currentNode = currentNode.nodes[word[i]];
		} else {
			const newNode = new TrieNode();
			currentNode.nodes[word[i]] = newNode;
			currentNode = newNode;
		}
		currentNode.count++;
	}
	currentNode.exist = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
	let currentNode = this.root;
	for (let i = 0; i < word.length; i++) {
		if (currentNode.nodes[word[i]]) {
			currentNode = currentNode.nodes[word[i]];
		} else {
			return false;
		}
	}

	return currentNode.exist;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
	let currentNode = this.root;
	for (let i = 0; i < prefix.length; i++) {
		if (currentNode.nodes[prefix[i]]) {
			currentNode = currentNode.nodes[prefix[i]];
		} else {
			return false;
		}
	}

	return currentNode.count > 0;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// const trie = new Trie();

// trie.insert("apple");
// console.log(trie.search("apple"));   // 返回 true
// console.log(trie.search("app"));     // 返回 false
// console.log(trie.startsWith("app")); // 返回 true
// trie.insert("app");   
// console.log(trie.search("app"));     // 返回 true