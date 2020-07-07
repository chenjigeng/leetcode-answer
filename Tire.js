/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.nodes = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.nodes;
  for (let i = 0; i < word.length; i++) {
    let newNode = node[word[i]];
    if (!newNode) {
      newNode = node[word[i]] = {};
    }
    node = newNode;
  }
  node.end = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.nodes;
  for (let i = 0; i < word.length; i++) {
    console.log(node)
    if (!node[word[i]]) {
      return false;
    }
    node = node[word[i]];
  }

  return !!node.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.nodes;
  for (let i = 0; i < prefix.length; i++) {
    if (!node[prefix[i]]) {
      return false;
    }
    node = node[prefix[i]];
  }

  return !node.end;
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
// trie.search("apple");   // 返回 true
// console.log(trie.search("app"));     // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");   
// trie.search("app");     // 返回 true