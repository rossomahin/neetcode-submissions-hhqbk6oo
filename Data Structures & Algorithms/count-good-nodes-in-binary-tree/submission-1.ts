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

        return this.depth(root, -Infinity);

    }
    private depth(root: TreeNode | null, max): number {
        if (root === null) return 0;

        const good = root.val >= max ? 1 : 0;
        max = Math.max(root.val, max);
        return good + this.depth(root.left, max) + this.depth(root.right, max);
    }
}
