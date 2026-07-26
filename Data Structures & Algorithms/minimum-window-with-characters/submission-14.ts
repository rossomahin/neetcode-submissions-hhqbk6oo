class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (s.length < t.length) return "";
        
        const window = {}
        const countT = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(countT).length;

        let minLen = Infinity;
        let resLeft = 0;
        let resRight = 0;

        let left = 0;
        for (let right = 0; right < s.length; right++) {
            let c = s[right];
            window[c] = (window[c] || 0) + 1;

            if (countT[c] && window[c] === countT[c]) {
                have++;
            }
            
            while (have === need) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    resRight = right;
                    resLeft = left;
                }

                window[s[left]]--;
                if (countT[s[left]] && countT[s[left]] > window[s[left]]) {
                    have--;
                }

                left++;
            }
        }
        return minLen === Infinity ? "" : s.slice(resLeft, resRight + 1);
    }
}
