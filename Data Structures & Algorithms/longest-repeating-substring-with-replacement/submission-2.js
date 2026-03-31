class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let charSet = new Set(s);

        for (let char of s) {
            let count = 0;
            let left = 0;

            for (let right = 0; right < s.length; right++) {
                if (s[right] === char) {
                    count++;
                }

                while (right - left + 1 - count > k) {
                    if (s[left] === char) {
                        count--;
                    }
                    left++;
                }
                res = Math.max(res, right - left + 1);
            }
        }
        return res;
    }
}
