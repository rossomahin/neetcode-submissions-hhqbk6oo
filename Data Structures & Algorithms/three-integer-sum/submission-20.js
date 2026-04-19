class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1, r = nums.length - 1;

            while (l < r) {
                const sum = nums[l] + nums[r] + nums[i];

                if (sum === 0) {
                    res.push([nums[l], nums[r], nums[i]]);

                    l++;
                    r--;

                    while (l < r && nums[l] === nums[l - 1]) l++;
                    while (l < r && nums[r] === nums[r + 1]) r--;
                    
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return res;
    }
}
