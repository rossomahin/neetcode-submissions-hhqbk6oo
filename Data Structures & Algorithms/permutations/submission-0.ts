class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {
        const res = [];
        function dfs(current, used) {
            if (current.length === nums.length) res.push([...current]);
            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue;

                current.push(nums[i])
                used[i] = true;

                dfs(current, used);
                
                used[i] = false;
                current.pop();
            }
        }
        dfs([], []);
        return res;
    }
}
