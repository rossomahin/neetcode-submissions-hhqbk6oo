class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let prefix = 1, suff = 1;
        let res = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            prefix = nums[i - 1] * prefix;
            res[i] *= prefix;
        }
        for (let i = n - 2; i >= 0; i--) {
            suff = nums[i + 1] * suff;
            res[i] *= suff;
        }

        return res;
    }
}
