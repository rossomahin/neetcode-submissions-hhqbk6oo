class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 0, right = Math.max(...piles);
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let hours = 0;
            for (let b of piles) {
                hours += Math.ceil(b / mid)
            }
            if (hours <= h) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return left
    }
}
