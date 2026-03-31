class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = [];
        for (let i = 0; i < temperatures.length; i++) {
            while (
                stack.length &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
                const prev = stack.pop();
                res[prev] = i - prev;
            }
            stack.push(i);
        }
        return res
    }
}
