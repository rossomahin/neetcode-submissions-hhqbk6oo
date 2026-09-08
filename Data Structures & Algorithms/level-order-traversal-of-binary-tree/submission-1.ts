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
        if (root === null) return [];
        let queue = [root];
        const res = [];
        while (queue.length !== 0) {
            const level = [];
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                level.push(node.val);
                if (node.left !== null) { 
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
                
            }
            res.push(level);
            
        }
        return res;
    }
}
