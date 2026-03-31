class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            const rowSet = new Set();
            const colSet = new Set();

            for (let j = 0; j < 9; j++) {
                const rowVal = board[i][j];
                if (rowVal !== "." && rowSet.has(rowVal)) return false;
                rowSet.add(rowVal);

                const colVal = board[j][i];
                if (colVal !== "." && colSet.has(colVal)) return false;
                colSet.add(colVal)
            }
        }

        for (let blockRow = 0; blockRow < 3; blockRow++) {
            for (let blockCol = 0; blockCol < 3; blockCol++) {
                const blockSet = new Set();
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const val = board[blockRow*3 + i][blockCol*3 + j]
                        if (val !== "." && blockSet.has(val)) return false
                        blockSet.add(val)
                    }
                }
            }
        }

        return true
    }
}
