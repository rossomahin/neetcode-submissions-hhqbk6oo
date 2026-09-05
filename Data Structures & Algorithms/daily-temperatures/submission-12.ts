class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: number[][] = [];
        const res: number[] = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (
                stack.length && stack[stack.length - 1][1] < temperatures[i]
            ) {
                const [prevIdx] = stack.pop();
                res[prevIdx] = i - prevIdx;
            }

            stack.push([i, temperatures[i]]);
        }
        return res;
    }
}
