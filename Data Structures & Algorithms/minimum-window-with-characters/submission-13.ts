class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (s.length < t.length) return "";

        const countT = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(countT).length;

        let minLen = Infinity;
        let resLeft = 0;
        let resRight = 0;

        const window = {};
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            window[char] = (window[char] || 0) + 1;

            if (countT[char] && countT[char] === window[char]) {
                have++;
            }

            while (have === need) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    resLeft = left;
                    resRight = right;
                }

                window[s[left]]--
                if (countT[s[left]] && countT[s[left]] > window[s[left]]) {
                    have--;
                }
                left++;
            }
        }

        return minLen === Infinity ? "" : s.slice(resLeft, resRight + 1);
    }
}
