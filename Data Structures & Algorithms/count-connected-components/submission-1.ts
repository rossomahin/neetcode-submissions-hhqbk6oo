class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adj = Array.from({length: n}, () => []);
        for (const [a, b] of edges) {
            adj[a].push(b);
            adj[b].push(a);
        }
        let count = 0;
        const visited = new Set<number>();
        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                count++;
                const stack = [i];
                while (stack.length !== 0) {
                    const node = stack.pop();
                    visited.add(node);
                    for (let neighbor of adj[node]) {
                        if (!visited.has(neighbor)) stack.push(neighbor)
                    }
                }
            }
        }
        return count;
    }
}
