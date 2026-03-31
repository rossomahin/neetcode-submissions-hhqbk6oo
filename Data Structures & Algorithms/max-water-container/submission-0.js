class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1;
        let maxArea = 0
        while (left < right) {
            let currentArea = Math.min(
                heights[left], heights[right])
                * (right - left);
            maxArea = Math.max(maxArea, currentArea);
            if (heights[left] > heights[right]) right--
            else left++
        }
        return maxArea
    }
}
