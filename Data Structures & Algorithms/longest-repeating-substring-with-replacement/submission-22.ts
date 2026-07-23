class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let windowSize = 0;
        let left = 0;
        let maxF = 0;
        const count = new Map();
        for (let right = 0; right < s.length; right++) {
            count.set(s[right], (count.get(s[right]) || 0) + 1);
            maxF = Math.max(maxF, count.get(s[right]));

            if (right - left + 1 - maxF > k) {
                count.set(s[left], count.get(s[left]) - 1);
                left++;
            }

            windowSize = Math.max(windowSize, right - left + 1);
        }

        return windowSize;
    }
}
