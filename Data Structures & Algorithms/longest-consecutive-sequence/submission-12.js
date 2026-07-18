class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let length = 0;
        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let streak = 1;
                while (numSet.has(num + streak)) {
                    streak++;
                }   
                length = Math.max(length, streak);
            }
        }
        return length;
    }
}
