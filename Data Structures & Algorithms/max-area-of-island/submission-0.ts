class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        let maxArea = 0;
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, this.dfs(grid, r, c));
                }
            }
        }
        return maxArea;
    }

    dfs(grid: number[][], r: number, c: number): number {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return 0;
        if (grid[r][c] !== 1) return 0;
        
        grid[r][c] = 0;
        return 1 + this.dfs(grid, r + 1, c) + this.dfs(grid, r - 1, c) + this.dfs(grid, r, c + 1) + this.dfs(grid, r, c - 1);
    }
}
