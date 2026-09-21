class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const n = board.length;
        const m = board[0].length;
        const visited = Array.from({length: n}, () => Array(m).fill(false));
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < m; col++) {
                if (board[row][col] === word[0]) {
                    if (dfs(row, col, 0, visited)) return true;
                }
            }
        }
        return false;

        function dfs(row, col, index, visited) {
            if (index === word.length) return true;
            if (row < 0 || row >= n || col < 0 || col >= m) {
                return false;
            }
            if (visited[row][col] === true) {
                return false;
            }
            if (board[row][col] !== word[index]) {
                return false;
            }
            visited[row][col] = true;   
            const result = dfs(row + 1, col, index + 1, visited) ||dfs(row, col + 1, index + 1, visited) || dfs(row - 1, col, index + 1, visited) ||dfs(row, col - 1, index + 1, visited);
            visited[row][col] = false;
            return result;                  
        }
    }
}
