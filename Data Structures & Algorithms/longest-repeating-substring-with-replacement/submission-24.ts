class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let maxF = 0;
        let longest = 0;
        let window = {};

        for (let right = 0; right < s.length; right++) {
            window[s[right]] = (window[s[right]] || 0) + 1;
            maxF = Math.max(maxF, window[s[right]]);

            if (right - left + 1 - maxF > k) {
                window[s[left]]--;
                left++
            }

            longest = Math.max(longest, right - left + 1);    
        }

        return longest
    }
}
