class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let prefix = new Array(n).fill(1);
        let suff = new Array(n).fill(1);
        let res = new Array(n);

        for (let i = 1; i < n; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        for (let i = n - 2; i >= 0; i--) {
            suff[i] = nums[i + 1] * suff[i + 1];
        }
        for (let i = 0; i < n; i++) {
            res[i] = prefix[i] * suff[i];
        }
        return res;
    }
}
