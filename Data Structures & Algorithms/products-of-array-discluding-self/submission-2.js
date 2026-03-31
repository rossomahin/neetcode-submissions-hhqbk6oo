class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let pref = new Array(n).fill(1);
        let suff = new Array(n).fill(1);
        let res = new Array(n);

        for (let i = 1; i < n; i++) {
            pref[i] = nums[i - 1] * pref[i - 1];
        }
        for (let i = n - 2; i >= 0; i--) {
            suff[i] = nums[i + 1] * suff[i + 1];
        }
        for (let i = 0; i < n; i++) {
            res[i] = pref[i] * suff[i]
        }

        return res;
    }
}
