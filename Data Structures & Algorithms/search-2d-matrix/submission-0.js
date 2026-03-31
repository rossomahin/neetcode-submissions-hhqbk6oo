class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length // количество рядов
        let n = matrix[0].length // количество ячеек

        let left = 0, right = m * n - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2); // 5
            /**
            * [ 1, 2, 4, 8,
            *   10, #11#, 12, 
            *   13, 14, 20, 30, 40
            * ]
             */
            let row = Math.floor(mid / n); // индекс 1
            let col = mid % n; // 1

            if (matrix[row][col] < target) {
                left = mid + 1
            } else if (matrix[row][col] > target) {
                right = mid - 1
            } else {
                return true
            }
        }
        return false
    }
}
