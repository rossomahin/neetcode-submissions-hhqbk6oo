class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        let deque = [];

        for (let r = 0; r < nums.length; r++) {
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop();
            }
            deque.push(r);

            if (deque[0] < r - k + 1) {
                deque.shift();
            }

            if (r >= k - 1) {
                res.push(nums[deque[0]]);
            }
        }
        return res;
    }
}
