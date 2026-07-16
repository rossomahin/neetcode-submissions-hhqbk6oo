class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let c = 0; c < 9; c++) {
            const seen = new Set();
            for (let r = 0; r < 9; r++) {
                if (board[c][r] === '.') continue;
                if (seen.has(board[c][r])) return false;
                seen.add(board[c][r]);
            }
        }
        for (let c = 0; c < 9; c++) {
            const seen = new Set();
            for (let r = 0; r < 9; r++) {
                if (board[r][c] === '.') continue;
                if (seen.has(board[r][c])) return false;
                seen.add(board[r][c]);
            }
        }
        for (let square = 0; square < 9; square++) {
            const seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let r = Math.floor(square / 3) * 3 + i;
                    let c = (square % 3) * 3 + j;

                    if (board[r][c] === '.') continue; 
                    if (seen.has(board[r][c])) return false;

                    seen.add(board[r][c]) 
                }
            }
        }

        return true;
    }
}
