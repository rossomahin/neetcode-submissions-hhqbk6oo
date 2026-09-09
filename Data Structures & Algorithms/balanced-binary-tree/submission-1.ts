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
        return this.depth(root) !== -1
    }
    depth(root): number {
        if (root === null) return 0;
        let left = this.depth(root.left);
        let right = this.depth(root.right);
        if (left === -1 || right === -1) {
            return -1;
        } else if (Math.abs(left - right) > 1) {
            return -1;
        }
        return 1 + Math.max(left, right)
    }
}
