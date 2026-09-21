class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const res = [];
        function dfs(current, open, close) {
            if (open === n && close === n) {
                res.push(current);
                return;
            }

            if (open < n) {
                dfs(current + '(', open + 1, close);
            } 
            if (close < open) {
                dfs(current + ')', open, close + 1);
            }
        }
        dfs('', 0, 0);
        return res;
    }
}
