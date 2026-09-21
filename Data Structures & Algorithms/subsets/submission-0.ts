class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const res = [];
        function dfs(start, current) {
            res.push([...current]);
            for (let i = start; i < nums.length; i++) {
                current.push(nums[i]);
                dfs(i + 1, current);
                current.pop();
            }
        }
    dfs(0, []);
    return res;
    }
}
