class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) matches++
        }

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) return true;

            let idx = s2.charCodeAt(right) - 97;
            s2Count[idx]++;
            if (s2Count[idx] === s1Count[idx]) {
                matches++;
            } else if (s2Count[idx] - 1 === s1Count[idx]) {
                matches--;
            }

            idx = s2.charCodeAt(left) - 97;
            s2Count[idx]--;
            if (s2Count[idx] === s1Count[idx]) matches++
            else if (s2Count[idx] + 1 === s1Count[idx]) matches--;
            left++;
        }

        return matches == 26;
    }
}
