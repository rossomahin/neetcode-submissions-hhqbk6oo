/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        const visited = new Map<Node, Node>();

        function dfs(node: Node | null) {
            if (node === null) return node;

            if (visited.has(node)) {
                return visited.get(node);;
            }

            const clone = new Node(node.val);
            visited.set(node, clone);

            for (const neighbor of node.neighbors) {
                clone.neighbors.push(dfs(neighbor)!);
            }

            return clone;
        }
        return dfs(node) as Node;
    }
}
