class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1
        let maxArea = -Infinity

        while (left < right) {
            let currentArea = Math.min(
                heights[left], heights[right])
                * (right - left);
            if (maxArea < currentArea) maxArea = currentArea;
            if (heights[left] > heights[right]) right--
            else left++
        }
        return maxArea
    }
}
