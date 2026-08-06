class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length > s.length) return "";
        const countT = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0
        let need = Object.keys(countT).length;

        let short = Infinity;
        let resRight = 0;
        let resLeft = 0;

        let window = {};

        let left = 0;
        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            window[char] = (window[char] || 0) + 1;

            if (countT[char] && countT[char] === window[char]) {
                have++;
            }

            while (have === need) {
                if (right - left + 1 < short) {
                    short = right - left + 1;
                    resRight = right;
                    resLeft = left;
                }

                window[s[left]]--;
                if (countT[s[left]] && countT[s[left]] > window[s[left]]) {
                    have--;
                }
                left++
            }
        }

        return short === Infinity ? "" : s.slice(resLeft, resRight + 1);
    }
}
