class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);

        while (left <= right) {
            let hours = 0;
            const mid = Math.floor((left + right) / 2);
 
            for (let i of piles) {
                hours += Math.ceil(i / mid);
            }

            if (hours <= h) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}
