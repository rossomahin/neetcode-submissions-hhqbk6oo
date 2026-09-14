class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const countS1 = new Array(26).fill(0);
        const countS2 = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            countS1[s1.charCodeAt(i) - 97]++;
            countS2[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (countS1[i] === countS2[i]) matches++;
        }

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) return true;

            let idx = s2.charCodeAt(right) - 97;
            countS2[idx]++;
            if (countS2[idx] === countS1[idx]) matches++;
            else if (countS2[idx] - 1 === countS1[idx]) matches--;

            idx = s2.charCodeAt(left) - 97;
            countS2[idx]--;
            if (countS2[idx] === countS1[idx]) matches++;
            else if (countS2[idx] + 1 === countS1[idx]) matches--;

            left++;
        }

        return matches === 26
    }
}
