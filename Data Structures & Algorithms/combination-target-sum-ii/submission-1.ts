class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        candidates.sort((a, b) => a - b);
        const res = [];
        function dfs(start, current, sum) {
            if (sum === target) {
                res.push([...current]);
            } else if (sum > target) {
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] === candidates[i - 1]) continue;
                current.push(candidates[i]);
                dfs(i + 1, current, sum + candidates[i]);
                current.pop();
            }
        }
        dfs(0, [], 0);
        return res;
    }
}
