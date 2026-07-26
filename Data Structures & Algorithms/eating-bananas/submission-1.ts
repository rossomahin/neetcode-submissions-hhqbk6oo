class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 0;
        let right = 0;
        let k = Infinity;
        for (let i of piles) {
            right = Math.max(i, right);
        }
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            let hours = 0;
            for (let pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            if (hours <= h) {
                k = Math.min(k, mid);
                right = mid - 1;
            } else {
                left = mid + 1;
            } 
        }
        return k;
    }
}
