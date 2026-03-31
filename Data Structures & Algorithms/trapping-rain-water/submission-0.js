class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length === 0 || !height) return 0;
        let maxArea = 0
        let left = 0, right = height.length - 1
        let leftMax = height[left], rightMax = height[right]
        while (left < right) {
            if (leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                maxArea += leftMax - height[left]
            } else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                maxArea += rightMax - height[right]
            }
        }
        return maxArea
    }
}
