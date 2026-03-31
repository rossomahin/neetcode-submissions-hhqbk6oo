class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const count = new Map()

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];

            if (count.has(need)) {
                return [count.get(need), i]
            }
            count.set(nums[i], i);
        }
    }
}
