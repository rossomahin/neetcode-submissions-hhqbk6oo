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
                    if (dfs(row, col, 0)) return true;
                }
            }
        }
        return false;

        function dfs(row, col, index) {
            if (index === word.length) return true;
            if (row < 0 || row >= n || col < 0 || col >= m) {
                return false;
            }
            if (board[row][col] === '#') {
                return false;
            }
            if (board[row][col] !== word[index]) {
                return false;
            }
            const symb = board[row][col];
            board[row][col] = '#'
            const result = dfs(row + 1, col, index + 1) ||dfs(row, col + 1, index + 1) || dfs(row - 1, col, index + 1) ||dfs(row, col - 1, index + 1);
            board[row][col] = symb;
            return result;                  
        }
    }
}
