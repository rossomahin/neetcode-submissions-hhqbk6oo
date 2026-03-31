class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = new Map();
        for (let c of s) {
            count.set(c, (count.get(c) || 0) + 1);
        }
        for (let c of t) {
            if (!count.has(c) || count.get(c) === 0) {
                return false;
            }
            count.set(c, count.get(c) - 1);
        }
        return true;
    }
}
