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
        const res = [];

        this.inOrderTraversal(root, res);

        return res[k - 1]
    }
    private inOrderTraversal(root, res) {
        if (root === null) return 0;
        
        this.inOrderTraversal(root.left, res)
        res.push(root.val);
        this.inOrderTraversal(root.right, res);

        return res;
    }
}
