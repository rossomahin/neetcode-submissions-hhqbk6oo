class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        for (let i of nums) {
            map.set(i, (map.get(i) || 0) + 1) 
        }

        for (let [key, count] of map) {
            if (count > 1) return true
        }
        return false
    }
}
