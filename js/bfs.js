/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];

  if (!root) {
    return res;
  }

  const queue = [root];

  while (queue.length !== 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (i === size - 1) {
        res.push(node.val);
      }
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  return res;
};
//Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
