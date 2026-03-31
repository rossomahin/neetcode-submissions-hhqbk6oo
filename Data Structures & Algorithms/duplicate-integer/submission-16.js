class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = {};

        for (let num of nums) {
            if (seen[num]) return true;
            seen[num] = true;
        }
        return false;
    }
}
