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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        const map = new Map();
        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        function dfs(preStart, preEnd, inStart, inEnd) {
            if (preStart > preEnd) return null;

            const rootVal = preorder[preStart]
            const root = new TreeNode(rootVal);

            const rootIdx = map.get(root.val);
            const leftSize = rootIdx - inStart;

            root.left = dfs(preStart + 1, preStart + leftSize, inStart, rootIdx - 1);
            root.right = dfs(preStart + 1 + leftSize, preEnd, rootIdx + 1, inEnd);

            return root;    
        }
        return dfs(0, preorder.length - 1, 0, inorder.length - 1);
    }
}
