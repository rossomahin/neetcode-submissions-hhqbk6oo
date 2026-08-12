class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 0, right = 0;

        let k = 0

        for (const pile of piles) {
            right = Math.max(right, pile);
        }

        while (left <= right) {
            let hours = 0;

            const mid = Math.floor((right + left) / 2);

            for (const i of piles) {
                hours += Math.ceil(i / mid);
            }

            if (hours <= h) {
                k = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return k
    }
}
