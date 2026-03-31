class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        

        for (let i of nums) {
            freq.set(i, (freq.get(i) || 0) + 1);
        }

        return [...freq.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([num]) => num);
    }
}
