class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const output = [];
        const adj = Array.from({length: numCourses}, () => []);
        for (let [a, b] of prerequisites) {
            adj[b].push(a);
        }
        
        const state = new Array(numCourses).fill(0);

        function dfs(node): boolean {
            if (state[node] === 1) return false;
            if (state[node] === 2) return true;


            state[node] = 1;

            for (const neighbor of adj[node]) {
                const result = dfs(neighbor);
                if (!result) return false;
            }

            state[node] = 2;
            output.push(node);
            return true;
        }
        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }
        return output.reverse();
    }
}
