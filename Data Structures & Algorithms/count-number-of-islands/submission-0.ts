class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let count = 0;
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[r][c] === '1') {
                    count++;
                    this.dfs(grid, r, c);
                }
            }
        }
        return count;
    }

    dfs(grid: string[][], r: number, c: number): void {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length) return;

        if (grid[r][c] !== '1') return;

        grid[r][c] = '0'
        this.dfs(grid, r + 1, c);
        this.dfs(grid, r - 1, c);
        this.dfs(grid, r, c + 1);
        this.dfs(grid, r, c - 1);
    }
}
