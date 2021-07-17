/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.nodes = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let nodes = this.nodes;

  for (let i = 0; i < word.length; i++) {
    if (!nodes[word[i]]) {
      nodes[word[i]] = {};
    }
    nodes = nodes[word[i]];
  }

  nodes.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let nodes = this.nodes;

  for (let i = 0; i < word.length; i++) {
    if (!nodes[word[i]]) {
      return false;
    } else {
      nodes = nodes[word[i]];
    }
  }

  return nodes.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let nodes = this.nodes;

  for (let i = 0; i < prefix.length; i++) {
    if (!nodes[prefix[i]]) {
      return false;
    } else {
      nodes = nodes[prefix[i]];
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
