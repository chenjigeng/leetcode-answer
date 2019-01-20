/*
https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree/
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
public:
    int maxDepth(Node* root) {
      if (root == nullptr) return 0;
      int max = 1;
      for (int i = 0; i < root->children.size(); i++) {
        Node* node = root->children[i];
        int num = maxDepth(node) + 1;
        max = max > num ? max : num;
      }

      return max;
    }
};