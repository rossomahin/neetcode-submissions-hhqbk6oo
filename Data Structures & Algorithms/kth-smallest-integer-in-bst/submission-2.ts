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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        if (root === null) return 0;

        const res = this.inOrder(root);
        return res[k - 1];
    }
    inOrder(root: TreeNode | null) : number[] {
        if (root === null) return [];
        let left = this.inOrder(root.left);
        let right = this.inOrder(root.right);
        return [...left, root.val, ...right];
    }
}
