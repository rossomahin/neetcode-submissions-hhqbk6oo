class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1,
            maxArea = 0;
        
        while (l < r) {
            let currentArea = (
                (Math.min(heights[l], heights[r]))
                * (r - l)
            );
            maxArea = Math.max(maxArea, currentArea);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return maxArea;
    }
}
