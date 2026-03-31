class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Считаем частоты каждого числа
        const freq = new Map();
        for (let n of nums) {
            freq.set(n, (freq.get(n) || 0) + 1);
        }

        return this.bucketSort(nums.length, k, freq);
    }

    /**
     * @param {number} lenA
     * @param {number} k
     * @param {Map<number, number>}
     * @return {number[]}
     */
    bucketSort(lenA, k, map) {
        const buckets = Array.from({ length: lenA + 1 }, () => []);

        for (let [num, freq] of map.entries()) {
            buckets[freq].push(num);
        }

        const res = [];
        for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            for (let num of buckets[i]) {
                res.push(num);
                if (res.length === k) break;
            }
        }

        return res;
    }
}