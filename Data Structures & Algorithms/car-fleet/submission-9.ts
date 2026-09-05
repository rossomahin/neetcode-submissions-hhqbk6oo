class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack = [];
        const cars = position.map((p, s) => [p, speed[s]]);
        cars.sort((a, b) => b[0] - a[0]);

        for (let [pos, speed] of cars) {
            const time = (target - pos) / speed;

            if (stack.length === 0 || stack[stack.length - 1] < time) {
                stack.push(time)
            }
        }

        return stack.length;
    }
}
