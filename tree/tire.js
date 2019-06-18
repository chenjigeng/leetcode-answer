/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new Node('');
};

function Node(token, exist = false, nodes = {}) {
  this.token = token;
  this.exist = exist;
  this.nodes = nodes;
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!node.nodes[letter]) {
      node.nodes[letter] = new Node(letter);
    }
    node = node.nodes[letter];
  }
  node.exist = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!node.nodes[letter]) {
      return false;
    } else {
      node = node.nodes[letter];
    }
  }
  if (!node.exist) return false;
  return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!node.nodes[letter]) {
      return false;
    } else {
      node = node.nodes[letter];
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