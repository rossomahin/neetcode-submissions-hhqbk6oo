class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const m: number = matrix.length;
        const n: number = matrix[0].length;

        let left: number = 0, right: number = (m * n) - 1;

        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2);
            const row: number = Math.floor(mid / n);
            const cols: number = mid % n;

            if (matrix[row][cols] === target) {
                return true;
            } else if (matrix[row][cols] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}
