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
    maxPathSum(root: TreeNode | null): number {
        if (root === null) return 0;
        let max = -Infinity;

        function dfs(root) {
            if (root === null) return 0;
            const left = Math.max(dfs(root.left), 0);
            const right = Math.max(dfs(root.right), 0);
            const current = left + root.val + right;
            max = Math.max(max, current);

            return root.val + Math.max(left, right)
        }
        dfs(root);
        return max;
    }
}
