class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => (a - b));
        const output = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[0] > 0) break;
            if (i > 0 && nums[i - 1] === nums[i]) continue;

            let left = i + 1, right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    output.push([nums[i], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return output;
    }
}
