class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const freq = Array.from({length: nums.length + 1}, () => []);

        for (let n of nums) {
            map.set(n, (map.get(n) || 0 ) + 1);
        }
        for (let [num, count] of map) {
            freq[count].push(parseInt(num));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (let n of freq[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
    }
}
