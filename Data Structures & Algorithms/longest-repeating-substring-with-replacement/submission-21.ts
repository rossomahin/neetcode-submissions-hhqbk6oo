class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let windowSize = 0;
        let maxF = 0;
        let left = 0;
        const count = {};
        for (let right = 0; right < s.length; right++) {
            count[s[right]] = (count[s[right]] || 0) + 1;
            maxF =  Math.max(maxF, count[s[right]]);

            if (right - left + 1 - maxF > k) {
                count[s[left]]--;
                left++;
            }

            windowSize = Math.max(windowSize, right - left + 1);
        }
        return windowSize
    }
}
