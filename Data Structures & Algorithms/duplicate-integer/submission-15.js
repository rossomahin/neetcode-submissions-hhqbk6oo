class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = {};

        for (let num of nums) {
            if (count[num] === true) {
                return true;
            }
            count[num] = true;
        }
        return false
    }
}
