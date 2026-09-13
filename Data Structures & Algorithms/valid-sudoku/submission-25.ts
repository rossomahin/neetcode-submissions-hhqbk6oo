class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let row = 0; row < 9; row++) {
            const seen = new Set();
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') continue;
                if (seen.has(board[row][col])) return false;

                seen.add(board[row][col])
            }
        }
        for (let row = 0; row < 9; row++) {
            const seen = new Set();
            for (let col = 0; col < 9; col++) {
                if (board[col][row] === '.') continue;
                if (seen.has(board[col][row])) return false;

                seen.add(board[col][row])
            }
        }
        for (let square = 0; square < 9; square++) {
            const seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const row = Math.floor(square / 3) * 3 + i;
                    const col = (square % 3) * 3 + j;

                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;

                    seen.add(board[row][col]);
                }
            }
        }

        return true;
    }
}
