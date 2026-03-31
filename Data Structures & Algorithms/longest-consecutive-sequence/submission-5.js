class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for (let num of nums) {
            if (!numSet.has(num - 1)) {
                let streak = 0;
                while (numSet.has(num + streak)) {
                    streak++;
                }
                longest = Math.max(longest, streak);
            }
            
        }
        return longest;
    }
}
