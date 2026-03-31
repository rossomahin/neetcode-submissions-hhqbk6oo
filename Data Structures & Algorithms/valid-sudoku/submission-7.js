class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let r = 0; r < 9; r++) {
            let seen = new Set();
            for (let i = 0; i < 9; i++) {
                if (board[r][i] === '.') continue;
                if (seen.has(board[r][i])) return false;

                seen.add(board[r][i]);
            }
        }
        for (let c = 0; c < 9; c++) {
            let seen = new Set();
            for (let i = 0; i < 9; i++) {
                if (board[i][c] === '.') continue;
                if (seen.has(board[i][c])) return false;

                seen.add(board[i][c]);
            }
        }
        for (let square = 0; square < 3; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let cols = (square % 3) * 3 + j;

                    if (board[row][cols] === '.') continue; 
                    if (seen.has(board[row][cols])) return false;

                    seen.add(board[row][cols]) 
                }
            }
        }

        return true;
    }
}
