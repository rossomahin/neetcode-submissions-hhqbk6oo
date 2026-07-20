class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0, right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            // S = h * w
            let width = right - left;
            let height = Math.min(heights[left], heights[right]);

            let currentArea = width * height;

            maxArea = Math.max(maxArea, currentArea);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea
    }
}
