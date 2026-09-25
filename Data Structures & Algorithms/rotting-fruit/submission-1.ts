class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const queue = [];
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 2) queue.push([r, c]);
            }
        }

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let minutes = 0;
        while (queue.length !== 0) {
            const levelSize = queue.length;    
            let rotted = false;
            for (let i = 0; i < levelSize; i++) {
                const [r, c] = queue.shift();
                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (nr >= 0 && nc >= 0 && nr < grid.length && nc < grid[0].length && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        rotted = true;
                        queue.push([nr, nc]);
                    }
                }
            }
            if (rotted) minutes++;
        }

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1) return -1;
            }
        }
        return minutes;
    }
}
