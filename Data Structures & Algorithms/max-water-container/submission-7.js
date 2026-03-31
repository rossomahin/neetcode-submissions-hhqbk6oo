class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1;
        let maxArea = 0;

        while (l < r) {
            let height = Math.min(heights[l], heights[r]);
            let width = r - l;
            let currentArea = height * width;

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
