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
    max = 0
    diameterOfBinaryTree(root: TreeNode | null): number {
        if (root === null) return 0;

        this._maxDepth(root);

        return this.max;
    }
    private _maxDepth(root: TreeNode | null): number {
        if (root === null) return 0;

        let left = this._maxDepth(root.left);
        let right = this._maxDepth(root.right);

        this.max = Math.max(this.max, left + right);

        return 1 + Math.max(this._maxDepth(root.left), this._maxDepth(root.right));
    }
}
