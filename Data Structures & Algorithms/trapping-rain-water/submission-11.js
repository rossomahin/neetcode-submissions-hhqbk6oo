class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length - 1,
            maxL = 0, maxR = 0,
            totalWater = 0
        while (l < r) {
            if (height[l] < height[r]) {
                maxL = Math.max(maxL, height[l]);
                totalWater += maxL - height[l];
                l++
            } else {
                maxR = Math.max(maxR, height[r]);
                totalWater += maxR - height[r];
                r--;
            }
        }
        return totalWater;
    }
}
