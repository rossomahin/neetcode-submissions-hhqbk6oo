class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        const numsSet = new Set();

        
        for (let i of nums) {
            if (numsSet.has(i)) {
                return i
            }
            numsSet.add(i);
        }
    }
}
