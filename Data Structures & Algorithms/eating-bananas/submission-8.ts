class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 0, right = Math.max(...piles);
        let k = Infinity;

        while (left <= right) {
            let hours = 0;
            const mid = Math.floor((left + right) / 2);

            for (let pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            if (hours <= h) {
                k = Math.min(k, mid)
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return k;
    }
}
