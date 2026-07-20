class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0, right = height.length - 1;
        let leftMax = 0, rightMax = 0; // нужен для посчета максимальной стенки, чтобы понять сколько воды можно добавить
        let totalWater = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                leftMax = Math.max(leftMax, height[left]);
                totalWater += (leftMax - height[left]);
                left++
            } else {
                rightMax = Math.max(rightMax, height[right]);
                totalWater += (rightMax - height[right]);
                right--;
            }
        }
        return totalWater;
    }
}
