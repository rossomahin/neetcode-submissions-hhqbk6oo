class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const map = new Map<string, number>();
        let left = 0, longest = 0;

        for (let right = 0; right < s.length; right++) {
            if (map.has(s[right])) {
                left = Math.max(left, (map.get(s[right]) + 1));
            }
            map.set(s[right], right);
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }
}
