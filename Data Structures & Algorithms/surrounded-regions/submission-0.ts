class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const firstRow = 0;
        const lastRow = board.length - 1;
        const leftCol = 0;
        const rightCol = board[0].length - 1;

        const queue = [];
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                if ((r === firstRow || r === lastRow || c === leftCol || c === rightCol) && board[r][c] === 'O') {
                    queue.push([r, c]);
                }
            }
        }

        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        while (queue.length !== 0) {
            const [r, c] = queue.shift();
            board[r][c] = '#';
            for (let [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nc >= 0 && nr < board.length && nc < board[0].length && board[nr][nc] === 'O') queue.push([nr, nc]);
            }
        }

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                if (board[r][c] === 'O') board[r][c] = 'X'
                else if (board[r][c] === '#') board[r][c] = 'O';
            }
        }
    }
}
