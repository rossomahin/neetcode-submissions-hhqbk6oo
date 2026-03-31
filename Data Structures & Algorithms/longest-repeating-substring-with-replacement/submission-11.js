class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map();

        let l = 0,
            maxF = 0;
        
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            count.set(c, (count.get(c) || 0) + 1);
            maxF = Math.max(maxF, count.get(c));

            while (r - l + 1 - maxF > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
