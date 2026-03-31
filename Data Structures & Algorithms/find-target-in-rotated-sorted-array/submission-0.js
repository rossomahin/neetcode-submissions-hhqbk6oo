class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2); // indx 3, val 6, t = 1

            if (nums[m] === target) return m;
            if (nums[l] <= nums[m]) { // array sorted by left side
                if (nums[l] <= target && target < nums[m]) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            } else if (nums[r] >= nums[m]) { // array sorted by right side
                if (nums[r] >= target && target > nums[m]) {
                    l = m + 1
                } else {
                    r = m - 1
                }
            }
        }
        return -1
    }
}