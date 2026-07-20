class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const output = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[0] > 0) break; // разрушаем итерацию, так число 0 не получим из положительных чисел
            if (i > 0 && nums[i] === nums[i - 1]) continue // пропускаем итерацию, чтобы не было дубликатов

            let left = i + 1, right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    output.push([nums[i], nums[left], nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) left++; // пропускаем дубликаты
                    while (left < right && nums[right] === nums[right - 1]) right--; // пропускаем дубликаты   

                    left++;
                    right--;               
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return output;
    }
}
