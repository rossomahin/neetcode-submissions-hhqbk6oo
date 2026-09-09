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
    isValidBST(root: TreeNode | null): boolean {
        if (root === null) return true;

        return this.depth(root, -Infinity, Infinity)
    }
    private depth(root: TreeNode | null, min, max) {
        if (root === null) return true;

        if (root.val <= min || root.val >= max) return false;

        return this.depth(root.left, min, root.val) && this.depth(root.right, root.val, max);
    }
}
