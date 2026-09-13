class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = {};
        const freq = Array.from({length: nums.length + 1}, () => []);

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        for (let num in count) {
            freq[count[num]].push(Number(num));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (let j of freq[i]) {
                res.push(j);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
