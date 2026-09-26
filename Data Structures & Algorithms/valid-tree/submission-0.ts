class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n - 1) return false;

        const adj = Array.from({length: n}, () => []);
        for (const [a, b] of edges) {
            adj[a].push(b);
            adj[b].push(a);
        }

        const state = new Array(n).fill(0);
        function dfs(node: number, parent: number): boolean {
            if (state[node] === 1) return false;
            state[node] = 1;
            for (const neighbor of adj[node]) {
                if (neighbor === parent) continue;
                if (!dfs(neighbor, node)) return false;
            }
            return true;
        }
        dfs(0, -1);
        return state.every(s => s === 1);
    }
}
