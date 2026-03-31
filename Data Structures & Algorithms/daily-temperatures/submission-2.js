class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        let stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [stackT, stackIdx] = stack.pop();
                res[stackIdx] = i - stackIdx;
            }
            stack.push([t, i]);
        }
        return res;
    }
}
