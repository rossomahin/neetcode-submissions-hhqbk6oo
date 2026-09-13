class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0, right = height.length - 1;
        let leftMax = 0, rightMax = 0;
        let totalWater = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                leftMax = Math.max(height[left], leftMax);
                totalWater += (leftMax - height[left]);
                left++;
            } else {
                rightMax = Math.max(height[right], rightMax);
                totalWater += (rightMax - height[right]);
                right--;
            }
        }
        return totalWater;
    }
}
