class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;
        const count = {};
        const freq = Array.from({length: n + 1}, () => []);

        for (let n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        for (let n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const output = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (let n of freq[i]) {
                output.push(n);
                if (output.length == k) {
                    return output;
                }
            }
        }
    }
}
