class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        for (let i of nums) {
            if (map.has(i)) return true;

            map.set(i);
        }
        return false
    }
}
