class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for (let n of nums) {
            if (!numSet.has(n - 1)) {
                let streak = 0;
                while (numSet.has(n + streak)) {
                    streak++
                }
                longest = Math.max(longest, streak);
            }
        }

        return longest;
    }
}
