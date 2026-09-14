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
    goodNodes(root: TreeNode | null): number {
        if (root === null) return 0;

        return this._maxDepth(root, -Infinity);
    }
    private _maxDepth(root: TreeNode| null, prev): number {
        if (root === null) return 0;

        const goodNode = root.val >= prev  ? 1 : 0;
        prev = Math.max(prev, root.val);

        return goodNode + this._maxDepth(root.left, prev) + this._maxDepth(root.right, prev);
    }
}
