class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const chars = new Map()

        for (let i = 0; i < s.length; i++) {
            chars.set(s[i], (chars.get(s[i]) || 0) + 1);
        }

        for (let j = 0; j < t.length; j++) {
            if (!chars.has(t[j]) || chars.get(t[j]) === 0) return false;
            chars.set(t[j], chars.get(t[j]) - 1);
        }
        return true;
    }
}
