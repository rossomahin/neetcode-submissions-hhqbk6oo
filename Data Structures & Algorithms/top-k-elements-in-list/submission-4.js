class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const topFreq = [];

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }

        while (k > 0) {
            let maxFreq = -Infinity;
            let maxNum;

            for (let [num, freq] of map.entries()) {
                if (freq > maxFreq) {
                    maxFreq = freq;
                    maxNum = num;
                }
            }

            topFreq.push(maxNum);
            map.delete(maxNum);
            k--;
        }

        return topFreq
    }
}
