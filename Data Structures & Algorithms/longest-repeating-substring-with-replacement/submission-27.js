class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    // sliding window
    const count = new Map();
    let maxF = 0;
    let result = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        count.set(s[right], (count.get(s[right]) ?? 0) + 1);

        maxF = Math.max(
            maxF,
            count.get(s[right])
        );

        while ((right - left + 1) - maxF > k) {
            count.set(s[left], (count.get(s[left]) - 1));
            left++;
        }
        result = Math.max(result, right - left + 1);
    }
    return result;
    }
}
