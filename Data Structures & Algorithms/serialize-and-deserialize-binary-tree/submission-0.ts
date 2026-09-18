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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        if (root === null) return "N";
        let serializeStr = "";

        serializeStr += root.val;
        let left = this.serialize(root.left);
        let right = this.serialize(root.right);

        return serializeStr + ',' + left + ',' + right;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        
        const arr = data.split(',');

        const i = [0];
        function dfs() {
            if (arr[i[0]] === 'N') {
                i[0]++;
                return null;
            }

            const root = new TreeNode(Number(arr[i[0]]));
            i[0]++;
            root.left = dfs();
            root.right = dfs();
            return root;
        }

        return dfs();
    }
}
