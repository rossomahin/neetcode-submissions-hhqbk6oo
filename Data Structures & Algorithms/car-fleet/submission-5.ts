class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack = [];
        const cars: number[][] = position.map((pos, i) => ([pos, speed[i]]));
        cars.sort((a, b) => b[0] - a[0]);

        for (const [pos, speed] of cars) {
            const time: number = (target - pos) / speed;

            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }
        }
        return stack.length;
    }
}
