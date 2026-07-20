class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    // так как массив отсортирован, можно использовать метод 2 указателей
    twoSum(numbers: number[], target: number): number[] {
        let left = 0, right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];

            if (sum === target) {
                return [left + 1, right + 1];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

    }
}
