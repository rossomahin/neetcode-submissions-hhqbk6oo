class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const pacificQueue = [];
        const atlanticQueue = [];
        const lastRow = heights.length - 1;
        const lastCol = heights[0].length - 1;
        for (let c = 0; c < heights[0].length; c++) {
            pacificQueue.push([0, c]);
            atlanticQueue.push([lastRow, c]);
        }

        for (let r = 0; r < heights.length; r++) {
            pacificQueue.push([r, 0]);
            atlanticQueue.push([r, lastCol])
        }

        const resPacicifc = this.bfs(heights, pacificQueue);
        const resAtlantic = this.bfs(heights, atlanticQueue);

        const result = [];
        for (const key of resPacicifc) {
            if (resAtlantic.has(key)) {
                const [r, c] = key.split(', ').map(Number);
                result.push([r, c]);
            }
        }
        return result;
    }
    bfs(heights: number[][], queue: number[][]): Set<string> {
        const set = new Set<string>();
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        while (queue.length !== 0) {
            const [r, c] = queue.shift();
            set.add(`${r}, ${c}`);
            for (let [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nc >= 0 && nr < heights.length && nc < heights[0].length && !set.has(`${nr}, ${nc}`) && heights[nr][nc] >= heights[r][c]) {
                    set.add(`${nr}, ${nc}`);
                    queue.push([nr, nc]);
                }
            }
        }
        return set;
    }
}
