class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const m: number = matrix.length;
        const n: number = matrix[0].length
        let left: number = 0, right: number = (m * n) - 1;

        while (left <= right) {
            const mid: number  = Math.floor((left + right) / 2);
            const row: number  = Math.floor(mid / n);
            const col: number  = mid % n;

            if (matrix[row][col] === target) {
                return true;
            } else if (matrix[row][col] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return false;
    }
}
