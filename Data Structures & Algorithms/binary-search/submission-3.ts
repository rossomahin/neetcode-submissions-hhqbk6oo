class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left: number = 0, right: number = nums.length - 1;

        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2);

            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] === target) {
                return mid;
            }
        }
        return -1;
    }
}
