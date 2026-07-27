class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set();

        for (let num of nums) {
            if (set.has(num)) {
                return true;
            }
            set.add(num)
        }
        return false;
    }
}
