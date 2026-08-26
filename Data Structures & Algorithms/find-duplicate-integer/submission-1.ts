class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let slow = 0, fast = 0;
        slow = nums[slow];
        fast = nums[nums[fast]];

        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }

        slow = 0;
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
}
