class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const res = [];
        function dfs(start, current) {
            res.push([...current]);
            for (let i = start; i < nums.length; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;

                current.push(nums[i]);

                dfs(i + 1, current);

                current.pop();
            }
        }
        dfs(0, []);
        return res;
    }
}
