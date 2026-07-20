class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let length = 0;

        for (let num of nums) {
            if (!numSet.has(num - 1)) {
                let streak = 1;
                while (numSet.has(num + streak)) {
                    streak++;
                }

                if (length < streak) length = streak;
            }
        }
        return length;
    }
}
