class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const res = [];
        function dfs(start, current, sum) {
            if (sum === target) {
                res.push([...current]);
            } else if (sum > target) {
                return;
            }
            for (let i = start; i < nums.length; i++) {
                current.push(nums[i]);
                dfs(i, current, sum + nums[i]);
                current.pop();
            }
        }
        dfs(0, [], 0);
        return res;
    }
}
