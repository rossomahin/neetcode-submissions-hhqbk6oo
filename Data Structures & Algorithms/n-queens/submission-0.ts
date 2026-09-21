class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n: number): string[][] {
        const cols = new Set();
        const diag1 = new Set();
        const diag2 = new Set();
        const res = [];
        function dfs(row, current) {
            if (row === n) {
                res.push([...current]);
                return;
            }
            for (let i = 0; i < n ; i++) {
                if (
                    !cols.has(i) && !diag1.has(row - i) && !diag2.has(row + i)
                ) {
                    const rowStr = '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1);
                    current.push(rowStr);
                    cols.add(i);
                    diag1.add(row - i);
                    diag2.add(row + i);
                    dfs(row + 1, current);
                    cols.delete(i);
                    diag1.delete(row -i);
                    diag2.delete(row + i);
                    current.pop();
                }
            }
        }
        dfs(0, []);
        return res;
    }
}
