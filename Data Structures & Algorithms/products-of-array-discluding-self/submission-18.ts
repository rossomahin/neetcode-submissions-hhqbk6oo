class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const output = new Array(n).fill(1);

        let prefix = 1;
        for (let i = 1; i < n; i++) {
            prefix = nums[i - 1] * prefix;;
            output[i] *= prefix;
        }
        let suffix = 1;
        for (let i = n - 2; i >= 0; i--) {
            suffix = nums[i + 1] * suffix;
            output[i] *= suffix;
        }

        return output
    }
}
