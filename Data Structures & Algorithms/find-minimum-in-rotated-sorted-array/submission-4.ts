class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0, right = nums.length - 1;
        const last = nums[nums.length - 1];

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] > last) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return nums[left];
    }
}
