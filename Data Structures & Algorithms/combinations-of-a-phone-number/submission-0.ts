class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        if (!digits.length) return [];
        const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
        const res = [];
        function dfs(start, current) {
            if (start === digits.length) {
                res.push(current);
                return;
            }

            const str = map[digits[start]];
            for (let i = 0; i < str.length; i++) {
                dfs(start + 1, current + str[i]);
            }
        }
        dfs(0, '');
        return res;
    }
}
