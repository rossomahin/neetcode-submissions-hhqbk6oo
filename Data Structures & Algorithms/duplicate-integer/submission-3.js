class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        for (let i of nums) {
            if (map.has(i))  {
                return true
            } else {
                map.set(i)
            }
        }
        return false
    }
}
