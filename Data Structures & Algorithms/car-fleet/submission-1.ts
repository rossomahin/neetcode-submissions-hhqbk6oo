class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack = [];
        const cars = position.map((pos, i) => [pos, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);

        for (let [pos, speeds] of cars) {
            const time = ((target - pos) / speeds);

            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }
        return stack.length
    }
}
