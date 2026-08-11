class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let min = 1, max = -Infinity;

        for (const i of piles) {
            max = Math.max(max, i);
        }
        
        let k = Infinity;

        while (min <= max) {
            let hours = 0;
            const mid = Math.floor((min + max) / 2);

            for (const i of piles) {
                hours += Math.ceil(i / mid);
            }

            if (hours <= h) {
                k = mid
                max = mid - 1;
            } else {
                min = mid + 1;
            }
        }

        return k;
    }
}
