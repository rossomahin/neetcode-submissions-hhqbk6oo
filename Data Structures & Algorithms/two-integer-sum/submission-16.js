class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const count = {};

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];

            if (count[need] !== undefined) {
                return [count[need], i];
            }
            count[nums[i]] = i;
        }
    }
}
