class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // структура map: ключ - символ, а индекс - значение {"char": "index"}
        let map = new Map();
        let longest = 0;
        let left = 0;
        for (let right = 0; right < s.length; right++) {
            if (map.has(s[right])) {
                left = Math.max(left, map.get(s[right]) + 1);
            }

            map.set(s[right], right);
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }
}
