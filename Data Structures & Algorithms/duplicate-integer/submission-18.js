class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const count = {};

        for (let n of nums) {
            if (count[n]) return true;

            count[n] = true;
        }
        return false;
    }
}
