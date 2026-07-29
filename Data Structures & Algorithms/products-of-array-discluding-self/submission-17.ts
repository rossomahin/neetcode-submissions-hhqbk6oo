class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        let prefix = 1, suffix = 1;
        const output = new Array(n).fill(1);
        
        // i = 1, prefix = 1, res = [1, 1, 1, 1]
        // i = 2, prefix = 2, res = [1, 1, 2, 1]
        // i = 3, prefix = 8, res = [1, 1, 2, 8]
        for (let i = 1; i < n; i++) {
            prefix = nums[i - 1] * prefix;
            output[i] *= prefix;
        }

        // i = 3, suffix = 1, res = [1, 1, 2, 8]
        // i = 2, suffix = 6, res = [1, 1, 12, 8]
        // i = 1, suffix = 24, res = [1, 24, 12, 8]
        // i = 0, suffix = 48, res = [48, 24, 12, 8]
        for (let i = n - 2; i >= 0; i--) {
            suffix = nums[i + 1] * suffix;
            output[i] *= suffix;
        }

        return output;
    }
}
