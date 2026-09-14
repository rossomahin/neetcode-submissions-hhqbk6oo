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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (root == null) return [];
        const dequeue = [root];
        const res = [];

        while (dequeue.length !== 0) {
            const level = [];
            const levelSize = dequeue.length
            
            for (let i = 0; i < levelSize; i++) {
                const node = dequeue.shift()
                level.push(node.val);
                if (node.left !== null) dequeue.push(node.left);
                if (node.right !== null) dequeue.push(node.right);
            }
            res.push(level);
        }
        return res;
    }
}
