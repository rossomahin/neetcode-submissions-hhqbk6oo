class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        for (let num of nums) {
            set.add(num)
        }

        let maxLength = 0
        for (let i of set) {
            if (set.has(i - 1)) continue

            let length = 1;
            let j = i;
            while (set.has(j + 1)) {
                length++;
                j++
            } 
            if (maxLength < length) maxLength = length
        }
        return maxLength
    }
}
