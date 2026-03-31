class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0, right = height.length - 1;
        let maxLeft = 0, maxRight = 0;
        let totalWater = 0;
        while (left < right) {
            if (height[left] < height[right]) {
                maxLeft = Math.max(height[left], maxLeft)
                totalWater += maxLeft - height[left];
                left++;
            } else {
                maxRight = Math.max(height[right], maxRight);
                totalWater += maxRight - height[right];
                right--;
            }
        }
        return totalWater;
    }
}
