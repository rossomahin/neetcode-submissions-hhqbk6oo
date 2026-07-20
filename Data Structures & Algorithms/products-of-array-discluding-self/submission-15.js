class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let prefix = 1, suff = 1;
        const res = new Array(n).fill(1);
        // i = 1, prefix = 1;
        // i = 2, prefix = 2;
        // i = 3, prefix = 8;
        // res = [1, 2, 8, 6]
        for (let i = 1; i < n; i++) {
            prefix = nums[i - 1] * prefix;
            res[i] *= prefix;
        }
        // i = 2, suff = 6;
        // i = 1, suff = 24;
        // i = 0, suff = 48;
        // res = [24, 12, 8, 48]
        for (let i = n - 2; i >= 0; i--) {
            suff = nums[i + 1] * suff;
            res[i] *= suff;
        }

        return res;
    }
}
