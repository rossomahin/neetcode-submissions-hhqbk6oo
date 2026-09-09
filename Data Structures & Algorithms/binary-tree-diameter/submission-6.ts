/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    max = -Infinity
    diameterOfBinaryTree(root: TreeNode | null): number {
        if (root === null) return 0;
        this.depth(root);
        return this.max;
    }
    private depth(root) {
        if (root === null) return 0;
        let left = this.depth(root.left);
        let right = this.depth(root.right);
        this.max = Math.max(this.max, right + left);
        
        return 1 + Math.max(left, right);
    }
}
