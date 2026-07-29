class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let row = 0; row < 9; row++) {
            const seen = new Set();
            for (let cols = 0; cols < 9; cols++) {
                if (board[row][cols] === '.') continue;
                if (seen.has(board[row][cols])) return false;

                seen.add(board[row][cols]);
            }
        }
        for (let row = 0; row < 9; row++) {
            const seen = new Set();
            for (let cols = 0; cols < 9; cols++) {
                if (board[cols][row] === '.') continue;
                if (seen.has(board[cols][row])) return false;

                seen.add(board[cols][row]);
            }
        }
        for (let square = 0; square < 9; square++) {
            const seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const row = Math.floor(square / 3) * 3 + i;
                    const cols = (square % 3) * 3 + j;

                    if (board[row][cols] === '.') continue;
                    if (seen.has(board[row][cols])) return false;

                    seen.add(board[row][cols]);
                }
            }
        }
        return true;
    }
}
