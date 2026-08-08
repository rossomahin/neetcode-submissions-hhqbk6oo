class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack = [];
        let maxArea = 0;
      
        for (let i = 0; i < heights.length; i++) {
            let start = i
            while (stack.length && heights[i] < stack[stack.length - 1][1]) {
                const [idx, height] = stack.pop()
                maxArea = Math.max(maxArea, height * (i - idx))
                start = idx;
            }
            stack.push([start ?? i, heights[i]])
        }
        while (stack.length) {
  const [idx, height] = stack.pop();
  maxArea = Math.max(maxArea, height * (heights.length - idx));
}
        return maxArea;
    }
}
