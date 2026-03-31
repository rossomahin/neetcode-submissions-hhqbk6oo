class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const arr = nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i] === arr[i - 1]) continue;

            let left = i + 1, right = arr.length - 1;

            while (left < right) {
                let sum = arr[i] + arr[left] + arr[right];
                if (sum < 0) left++
                else if (sum > 0) right--;
                else {
                    res.push([arr[i], arr[left], arr[right]])
                    while (arr[left] === arr[left+1]) left++;
                    while (arr[right] === arr[right-1]) right--;
                    left++;
                    right--;
                }
            }
        }
        return res
    }
}