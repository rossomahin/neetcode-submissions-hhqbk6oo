class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const queue = [];
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }
        while (queue.length !== 0) {
            const [r, c] = queue.shift();
            const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nc >= 0 && nr < grid.length && nc < grid[0].length && grid[nr][nc] === 2147483647) {
                    grid[nr][nc] = grid[r][c] + 1;
                    queue.push([nr, nc])
                }
            }

        }
    }
}
