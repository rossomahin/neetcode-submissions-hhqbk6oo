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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (root === null) return true;

        return this._maxDepth(root) !== -1
    }
    private _maxDepth(root: TreeNode | null): number {
        if (root === null) return 0;

        let left = this._maxDepth(root.left);
        let right = this._maxDepth(root.right);

        if (left === -1 || right === -1) return -1
        else if (Math.abs(left - right) > 1) return -1;

        return 1 + Math.max(left, right);
    }
}
